import notesAPI from '../../utils/repository/notesAPI';

// ACTIONS
const NOTE_ADD = 'NOTES_ADD';
const NOTE_REMOVE = 'NOTES_REMOVE';
const NOTE_UPDATE = 'NOTE_UPDATE';
const NOTES_LIST_REPLACE = 'NOTES_LIST_REPLACE';
const NOTES_LOADING = 'NOTES_LOADING';
const NOTES_LOADED = 'NOTES_LOADED';
const NOTES_FILTER = 'NOTES_FILTER';

const initialState = {
  data: [],
  dataFiltered: [],
  isLoading: false,
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE_ADD: {
      const newNotes = [...state.data, action.data];
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTE_REMOVE: {
      const newNotes = state.data.filter(note => note.id !== action.data.id);
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTE_UPDATE: {
      const newNotes = state.data.map((note) => {
        if (note.id === action.data.id) {
          return action.data;
        }
        return note;
      });
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTES_LIST_REPLACE: {
      const newNotes = [...action.data.notes];
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTES_LOADING: {
      return Object.assign({}, state, { isLoading: true });
    }
    case NOTES_LOADED: {
      return Object.assign({}, state, { isLoading: false });
    }
    case NOTES_FILTER: {
      const filtered = state.data.filter(
        (item) => {
          if (item.title.toUpperCase().includes(action.value.toUpperCase())) return true;

          let val = false;
          item.information.forEach((subItem) => {
            if (subItem.text.toUpperCase().includes(action.value.toUpperCase())) val = true;
          });

          return val;
        });

      return Object.assign({}, state,
        { dataFiltered: [...filtered] });
    }
    default:
      return state;
  }
};

// ACTION CREATORS
const internalAddNote = value => ({
  type: NOTE_ADD,
  data: {
    id: value.id,
    title: value.title,
    color: value.color,
    information: value.information,
  },
});

const internalRemoveNote = id => ({
  type: NOTE_REMOVE,
  data: { id },
});

const internalUpdateNote = value => ({
  type: NOTE_UPDATE,
  data: {
    id: value.id,
    title: value.title,
    color: value.color,
    information: value.information,
  },
});


const internalReplaceAllNotes = notes => ({
  type: NOTES_LIST_REPLACE,
  data: {
    notes,
  },
});

const internalLoadingNotes = () => ({
  type: NOTES_LOADING,
});

const internalLoadedNotes = () => ({
  type: NOTES_LOADED,
});

const filterNotes = value => ({
  type: NOTES_FILTER,
  value,
});

// THUNK
const addNote = value => dispatch => notesAPI.add(value.title, value.color, value.information)
  .then((id) => {
    const newValue = value;
    newValue.id = id;
    dispatch(internalAddNote(newValue));
    dispatch(filterNotes(''));
  });

const removeNote = id => dispatch => notesAPI.remove(id)
  .then(() => {
    dispatch(internalRemoveNote(id));
  });

const updateNote = value => dispatch =>
  notesAPI.update(value)
    .then(() => {
      dispatch(internalUpdateNote(value));
      dispatch(filterNotes(''));
    });

const loadNotes = () => (dispatch) => {
  dispatch(internalLoadingNotes());
  return notesAPI.getAll()
    .then((notes) => {
      dispatch(internalReplaceAllNotes(notes));
      dispatch(internalLoadedNotes());
      dispatch(filterNotes(''));
    })
    .catch(() => {
      dispatch(internalLoadedNotes());
    });
};

export { addNote, removeNote, updateNote, loadNotes, filterNotes };
export default reducer;
