import boardsAPI from '../../utils/repository/boardsAPI';
import { removeNotesByBoard } from './notes';
import { calculatePrio } from '../../utils/helpers/prio-calculator';

// ACTIONS
const BOARD_ADD = 'BOARDS_ADD';
const BOARD_REMOVE = 'BOARDS_REMOVE';
const BOARD_UPDATE = 'BOARD_UPDATE';
const BOARD_FOCUS = 'BOARD_FOCUS';
const BOARDS_LIST_REPLACE = 'BOARDS_LIST_REPLACE';
const BOARDS_LOADING = 'BOARDS_LOADING';
const BOARDS_LOADED = 'BOARDS_LOADED';
const BOARDS_FILTER = 'BOARDS_FILTER';
const BOARDS_SORT = 'BOARDS_SORT';

const initialState = {
  data: [],
  focusedBoard: undefined,
  isLoading: false,
  boardsLoaded: false,
  searchQuery: '',
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
      newBoards.sort((a, b) => a.priority - b.priority);
      return Object.assign({}, state, { data: newBoards, boardsLoaded: true });
    }
    case BOARDS_LOADING: {
      return Object.assign({}, state, { isLoading: true });
    }
    case BOARDS_LOADED: {
      return Object.assign({}, state, { isLoading: false });
    }
    case BOARDS_FILTER: {
      return Object.assign({}, state, { searchQuery: action.value });
    }
    case BOARDS_SORT: {
      const allBoards = [...state.data];
      const element = allBoards[action.value.oldIndex];
      allBoards.splice(action.value.oldIndex, 1);
      const higherPrioBoard = allBoards[action.value.newIndex - 1];
      const lowerPrioBoard = allBoards[action.value.newIndex];
      const newPrio = calculatePrio(element, higherPrioBoard, lowerPrioBoard);
      element.priority = newPrio;
      allBoards.splice(action.value.newIndex, 0, element);
      const newBoards = [...allBoards];
      return Object.assign({}, state, { data: newBoards });
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
    priority: value.priority,
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
    priority: value.priority,
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

const internalSortBoards = value => ({
  type: BOARDS_SORT,
  value,
});

// THUNK
const addBoard = value => (dispatch, getState) => {
  dispatch(internalLoadingBoards());
  let boardPriority;
  const allBoards = getState().boards.data;
  if (allBoards.length > 0) {
    const prios = allBoards.map(board => board.priority);
    boardPriority = Math.min(...prios) / 2;
  } else {
    boardPriority = 10;
  }
  return boardsAPI.add(value.title, value.colorTheme, boardPriority)
    .then((id) => {
      const newValue = value;
      newValue.id = id;
      newValue.priority = boardPriority;
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

const sortBoards = value => (dispatch, getState) => {
  if (value.newIndex !== value.oldIndex) {
    dispatch(internalLoadingBoards());
    dispatch(internalSortBoards(value));
    const allBoards = getState().boards.data;
    const sortedBoard = allBoards[value.newIndex];
    dispatch(updateBoard(sortedBoard));
  }
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


export { addBoard, removeBoard, updateBoard, focusBoard, loadBoards, filterBoards, sortBoards };
export default reducer;
