import boardsAPI from '../../utils/repository/boardsAPI';
import { removeNotesByBoard } from './notes';

// ACTIONS
const BOARD_ADD = 'BOARDS_ADD';
const BOARD_REMOVE = 'BOARDS_REMOVE';
const BOARD_UPDATE = 'BOARD_UPDATE';
const BOARD_FOCUS = 'BOARD_FOCUS';
const BOARDS_LIST_REPLACE = 'BOARDS_LIST_REPLACE';
const BOARDS_LOADING = 'BOARDS_LOADING';
const BOARDS_LOADED = 'BOARDS_LOADED';
const BOARDS_FILTER = 'BOARDS_FILTER';

const initialState = {
  data: [],
  focusedBoard: undefined,
  isLoading: false,
  boardsLoaded: false,
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_ADD: {
      const newBoards = [action.data, ...state.data];
      return Object.assign({}, state, { data: newBoards });
    }
    case BOARD_REMOVE: {
      const newBoards = state.data.filter(board => board.id !== action.data.id);
      return Object.assign({}, state, { data: newBoards });
    }
    case BOARD_UPDATE: {
      const newBoards = state.data.map((board) => {
        if (board.id === action.data.id) {
          return action.data;
        }
        return board;
      });
      return Object.assign({}, state, { data: newBoards });
    }
    case BOARD_FOCUS: {
      const boardToFocus = state.data.find(board => board.id === action.value);
      return Object.assign({}, state, { focusedBoard: boardToFocus });
    }
    case BOARDS_LIST_REPLACE: {
      const newBoards = [...action.data.boards]
        .map(board => Object.assign({}, board, { display: true }));
      newBoards.reverse();
      return Object.assign({}, state, { data: newBoards, boardsLoaded: true });
    }
    case BOARDS_LOADING: {
      return Object.assign({}, state, { isLoading: true });
    }
    case BOARDS_LOADED: {
      return Object.assign({}, state, { isLoading: false });
    }
    case BOARDS_FILTER: {
      const newData = state.data.map((item) => {
        let match = false;
        if (item.title.toUpperCase().includes(action.value.toUpperCase())) {
          match = true;
        }
        return Object.assign({}, item, { display: match });
      });
      return Object.assign({}, state, { data: newData });
    }
    default:
      return state;
  }
};

// ACTION CREATORS
const internalAddBoard = value => ({
  type: BOARD_ADD,
  data: {
    id: value.id,
    title: value.title,
    colorTheme: value.colorTheme,
    display: true,
  },
});

const internalRemoveBoard = id => ({
  type: BOARD_REMOVE,
  data: { id },
});

const internalUpdateBoard = value => ({
  type: BOARD_UPDATE,
  data: {
    id: value.id,
    title: value.title,
    colorTheme: value.colorTheme,
    display: true,
  },
});

const internalReplaceAllBoards = boards => ({
  type: BOARDS_LIST_REPLACE,
  data: {
    boards,
  },
});

const internalLoadingBoards = () => ({
  type: BOARDS_LOADING,
});

const internalLoadedBoards = () => ({
  type: BOARDS_LOADED,
});

const filterBoards = value => ({
  type: BOARDS_FILTER,
  value,
});

const internalFocusBoard = value => ({
  type: BOARD_FOCUS,
  value,
});

// THUNK
const addBoard = value => (dispatch) => {
  dispatch(internalLoadingBoards());
  return boardsAPI.add(value.title, value.colorTheme)
    .then((id) => {
      const newValue = value;
      newValue.id = id;
      dispatch(internalAddBoard(newValue));
      dispatch(internalLoadedBoards());
    });
};

const removeBoard = id => (dispatch) => {
  dispatch(internalLoadingBoards());
  dispatch(removeNotesByBoard(id));
  return boardsAPI.remove(id)
    .then(() => {
      dispatch(internalRemoveBoard(id));
      dispatch(internalLoadedBoards());
    });
};

const updateBoard = value => (dispatch) => {
  dispatch(internalLoadingBoards());
  return boardsAPI.update(value)
    .then(() => {
      dispatch(internalUpdateBoard(value));
      dispatch(internalLoadedBoards());
    });
};

const loadBoards = () => (dispatch) => {
  dispatch(internalLoadingBoards());
  return boardsAPI.getAll()
    .then((boards) => {
      dispatch(internalReplaceAllBoards(boards));
      dispatch(internalLoadedBoards());
    })
    .catch(() => {
      dispatch(internalLoadedBoards());
    });
};

const focusBoard = id => (dispatch, getState) =>
  new Promise((resolve) => {
    if (getState().boards.boardsLoaded) {
      resolve();
    } else {
      setTimeout(() => {
        dispatch(focusBoard(id));
      }, 100);
    }
  })
    .then(() => {
      dispatch(internalFocusBoard(id));
    });


export { addBoard, removeBoard, updateBoard, focusBoard, loadBoards, filterBoards };
export default reducer;
