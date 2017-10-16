import { addBoard, updateBoard } from './boards';

// ACTIONS
const BOARDFORM_LOAD_BOARD = 'BOARDFORM_LOAD_BOARD';
const BOARDFORM_UPDATE_TITLE = 'BOARDFORM_UPDATE_TITLE';
const BOARDFORM_UPDATE_COLOR_THEME = 'BOARDFORM_UPDATE_COLOR_THEME';
const BOARDFORM_RESET = 'BOARDFORM_RESET';
const BOARDFORM_OPEN = 'BOARDFORM_OPEN';

const initialState = {
  id: null,
  title: '',
  colorTheme: 'DEFAULT',
  activeForm: false,
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARDFORM_UPDATE_TITLE: {
      return Object.assign({}, state, { title: action.value });
    }
    case BOARDFORM_LOAD_BOARD: {
      return Object.assign({}, action.value, { activeForm: true });
    }
    case BOARDFORM_UPDATE_COLOR_THEME: {
      return Object.assign({}, state, { colorTheme: action.value });
    }
    case BOARDFORM_RESET: {
      return Object.assign({}, initialState);
    }
    case BOARDFORM_OPEN: {
      return Object.assign({}, initialState, { activeForm: true });
    }
    default:
      return state;
  }
};

// ACTION CREATORS
const loadBoard = value => ({
  type: BOARDFORM_LOAD_BOARD,
  value,
});

const updateTitle = value => ({
  type: BOARDFORM_UPDATE_TITLE,
  value,
});

const updateColorTheme = value => ({
  type: BOARDFORM_UPDATE_COLOR_THEME,
  value,
});

const closeForm = () => ({
  type: BOARDFORM_RESET,
});

const openForm = () => ({
  type: BOARDFORM_OPEN,
});

const saveBoard = () => (dispatch, getState) => {
  if (!getState().boardForm.id) {
    dispatch(
      addBoard(getState().boardForm))
      .then(() => {
        dispatch(closeForm());
      });
  } else {
    dispatch(
      updateBoard(getState().boardForm))
      .then(() => {
        dispatch(closeForm());
      });
  }
};

export {
  openForm,
  closeForm,
  loadBoard,
  updateTitle,
  updateColorTheme,
  saveBoard,
};
export default reducer;
