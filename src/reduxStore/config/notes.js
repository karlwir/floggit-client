import notesAPI from '../../utils/repository/mongoAPI';

// ACTIONS
const NOTE_ADD = 'NOTES_ADD';
const NOTE_REMOVE = 'NOTES_REMOVE';
const NOTE_UPDATE = 'NOTES_REMOVE';
const NOTES_LIST_REPLACE = 'NOTES_LIST_REPLACE';
const NOTES_LOADING = 'NOTES_LOADING';
const NOTES_LOADED = 'NOTES_LOADED';

const initialState = {
  data: [],
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
      // DO STUFF
      return state;
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
    default:
      return state;
  }
};

// ACTION CREATORS
const internalAddNote = (id, title, color, information) => ({
  type: NOTE_ADD,
  data: {
    id,
    title,
    color,
    information,
  },
});

const internalRemoveNote = id => ({
  type: NOTE_REMOVE,
  data: { id },
});

const internalUpdateNote = id => ({
  // FIX THIS
  type: NOTE_UPDATE,
  data: { id },
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

// THUNK
const addNote = (title, color, information) => dispatch => notesAPI.add(title, color, information)
  .then((id) => {
    dispatch(internalAddNote(id, title, color, information));
  });

const removeNote = id => dispatch => notesAPI.remove(id)
  .then(() => {
    dispatch(internalRemoveNote(id));
  });

  // FIX THIS
const updateNote = (id, title, color, information) => dispatch =>
  notesAPI.update(id, title, color, information)
    .then(() => {
      dispatch(internalUpdateNote(id, title, color, information));
    });

const loadNotes = () => (dispatch) => {
  dispatch(internalLoadingNotes());
  return notesAPI.getAll()
    .then((notes) => {
      dispatch(internalReplaceAllNotes(notes));
      dispatch(internalLoadedNotes());
    })
    .catch(() => {
      dispatch(internalLoadedNotes());
    });
};

export { addNote, removeNote, updateNote, loadNotes };
export default reducer;
