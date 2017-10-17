import notesAPI from '../../utils/repository/notesAPI';

// ACTIONS
const NOTE_ADD = 'NOTES_ADD';
const NOTE_REMOVE = 'NOTES_REMOVE';
const NOTE_UPDATE = 'NOTE_UPDATE';
const NOTES_LIST_REPLACE = 'NOTES_LIST_REPLACE';
const NOTES_LOADING = 'NOTES_LOADING';
const NOTES_LOADED = 'NOTES_LOADED';
const NOTES_FILTER = 'NOTES_FILTER';
const NOTES_SORT = 'NOTES_SORT';

const initialState = {
  data: [],
  isLoading: false,
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE_ADD: {
      const newNotes = [action.data, ...state.data];
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
      const newNotes = [...action.data.notes]
        .map(note => Object.assign({}, note, { display: true }));
      newNotes.sort((a, b) => a.priority - b.priority);
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTES_LOADING: {
      return Object.assign({}, state, { isLoading: true });
    }
    case NOTES_LOADED: {
      return Object.assign({}, state, { isLoading: false });
    }
    case NOTES_FILTER: {
      const newData = state.data.map((item) => {
        let val = false;
        if (item.title.toUpperCase().includes(action.value.toUpperCase())) val = true;

        item.information.forEach((subItem) => {
          if (subItem.text.toUpperCase().includes(action.value.toUpperCase())) val = true;
        });

        return Object.assign({}, item, { display: val });
      });
      return Object.assign({}, state, { data: newData });
    }
    case NOTES_SORT: {
      const boardId = action.value.collection;

      const allNotes = [...state.data];
      const boardNotes = allNotes.filter(note => note.boardId === boardId);
      const otherNotes = allNotes.filter(note => note.boardId !== boardId);
      const element = boardNotes[action.value.oldIndex];
      boardNotes.splice(action.value.oldIndex, 1);

      const higherPrioNote = boardNotes[action.value.newIndex - 1];
      const lowerPrioNote = boardNotes[action.value.newIndex];

      let newPrio = element.priority;
      if (higherPrioNote && lowerPrioNote) {
        const higherPrio = higherPrioNote.priority;
        const lowerPrio = lowerPrioNote.priority;
        newPrio = higherPrio + ((lowerPrio - higherPrio) / 2);
      } else if (higherPrioNote && !lowerPrioNote) {
        const higherPrio = higherPrioNote.priority;
        newPrio = higherPrio * 2;
      } else if (!higherPrioNote && lowerPrioNote) {
        const lowerPrio = lowerPrioNote.priority;
        newPrio = lowerPrio / 2;
      }
      element.priority = newPrio;
      boardNotes.splice(action.value.newIndex, 0, element);
      const newNotes = [...otherNotes, ...boardNotes];
      return Object.assign({}, state, { data: newNotes });
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
    boardId: value.boardId,
    information: value.information,
    priority: value.priority,
    display: true,
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
    boardId: value.boardId,
    information: value.information,
    priority: value.priority,
    display: true,
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

const internalSortNote = value => ({
  type: NOTES_SORT,
  value,
});

// THUNK
const addNote = value => (dispatch, getState) => {
  dispatch(internalLoadingNotes());
  let notePriority;
  const allNotes = getState().notes.data;
  const boardNotes = allNotes.filter(note => note.boardId === value.boardId);
  if (boardNotes.length > 0) {
    const boardPrios = boardNotes.map(note => note.priority);
    notePriority = Math.min(...boardPrios) / 2;
  } else {
    notePriority = 1;
  }
  return notesAPI.add(value.title, value.color, value.information, value.boardId, notePriority)
    .then((id) => {
      const newValue = value;
      newValue.id = id;
      newValue.priority = notePriority;
      dispatch(internalAddNote(newValue));
      dispatch(internalLoadedNotes());
    });
};

const removeNote = id => (dispatch) => {
  dispatch(internalLoadingNotes());
  return notesAPI.remove(id)
    .then(() => {
      dispatch(internalRemoveNote(id));
      dispatch(internalLoadedNotes());
    });
};

const removeNotesByBoard = id => (dispatch, getState) => {
  const toRemove = getState().notes.data.filter(note => note.boardId === id);
  toRemove.forEach(note => dispatch(removeNote(note.id)));
};


const updateNote = value => (dispatch) => {
  dispatch(internalLoadingNotes());
  return notesAPI.update(value)
    .then(() => {
      dispatch(internalUpdateNote(value));
      dispatch(internalLoadedNotes());
    });
};

const sortNotes = value => (dispatch, getState) => {
  if (value.newIndex !== value.oldIndex) {
    dispatch(internalLoadingNotes());
    dispatch(internalSortNote(value));
    const allNotes = getState().notes.data;
    const sortedBoardNotes = allNotes.filter(note => note.boardId === value.collection);
    const sortedNote = sortedBoardNotes[value.newIndex];
    dispatch(updateNote(sortedNote));
  }
};

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

export { addNote, removeNote, updateNote, loadNotes, filterNotes, removeNotesByBoard, sortNotes };
export default reducer;
