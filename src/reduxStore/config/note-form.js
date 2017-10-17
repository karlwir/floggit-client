import { addNote, updateNote } from './notes';
import { generateId } from '../../utils/helpers/uid-generator';

// ACTIONS
const NOTEFORM_LOAD_NOTE = 'NOTEFORM_LOAD_NOTE';
const NOTEFORM_UPDATE_TITLE = 'NOTEFORM_UPDATE_TITLE';
const NOTEFORM_UPDATE_BOARDID = 'NOTEFORM_UPDATE_BOARDID';
const NOTEFORM_UPDATE_COLOR = 'NOTEFORM_UPDATE_COLOR';
const NOTEFORM_ADD_INFOITEM = 'NOTEFORM_ADD_INFOITEM';
const NOTEFORM_REMOVE_INFOITEM = 'NOTEFORM_REMOVE_INFOITEM';
const NOTEFORM_RESET = 'NOTEFORM_RESET';
const NOTEFORM_OPEN = 'NOTEFORM_OPEN';

const initialState = {
  id: null,
  title: '',
  boardId: '',
  color: 'DEFAULT',
  information: [],
  activeForm: false,
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTEFORM_UPDATE_TITLE: {
      return Object.assign({}, state, { title: action.value });
    }
    case NOTEFORM_UPDATE_BOARDID: {
      return Object.assign({}, state, { boardId: action.value });
    }
    case NOTEFORM_LOAD_NOTE: {
      return Object.assign({}, action.value, { activeForm: true });
    }
    case NOTEFORM_UPDATE_COLOR: {
      return Object.assign({}, state, { color: action.value });
    }
    case NOTEFORM_ADD_INFOITEM: {
      const newInformation = [...state.information, action.value];
      return Object.assign({}, state, { information: newInformation });
    }
    case NOTEFORM_REMOVE_INFOITEM: {
      const newInformation = state.information.filter(infoItem => infoItem.id !== action.value);
      return Object.assign({}, state, { information: newInformation });
    }
    case NOTEFORM_RESET: {
      return Object.assign({}, initialState);
    }
    case NOTEFORM_OPEN: {
      return Object.assign({}, initialState, { activeForm: true });
    }
    default:
      return state;
  }
};

// ACTION CREATORS
const loadNote = value => ({
  type: NOTEFORM_LOAD_NOTE,
  value,
});

const updateTitle = value => ({
  type: NOTEFORM_UPDATE_TITLE,
  value,
});

const updateBoardId = value => ({
  type: NOTEFORM_UPDATE_BOARDID,
  value,
});

const updateColor = value => ({
  type: NOTEFORM_UPDATE_COLOR,
  value,
});

const addInfoItem = info => ({
  type: NOTEFORM_ADD_INFOITEM,
  value: {
    id: generateId(),
    text: info,
  },
});

const removeInfoItem = value => ({
  type: NOTEFORM_REMOVE_INFOITEM,
  value,
});

const closeForm = () => ({
  type: NOTEFORM_RESET,
});

const openForm = () => ({
  type: NOTEFORM_OPEN,
});

const saveNote = () => (dispatch, getState) => {
  if (!getState().noteForm.id) {
    dispatch(
      addNote(getState().noteForm))
      .then(() => {
        dispatch(closeForm());
      });
  } else {
    dispatch(
      updateNote(getState().noteForm))
      .then(() => {
        dispatch(closeForm());
      });
  }
};

export {
  openForm,
  closeForm,
  loadNote,
  updateTitle,
  updateBoardId,
  updateColor,
  addInfoItem,
  removeInfoItem,
  saveNote,
};
export default reducer;
