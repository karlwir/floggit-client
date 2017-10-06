import { addNote } from './notes';

// ACTIONS
const NOTEFORM_UPDATE_TITLE = 'NOTEFORM_UPDATE_TITLE';
const NOTEFORM_UPDATE_COLOR = 'NOTEFORM_UPDATE_COLOR';
const NOTEFORM_ADD_INFOITEM = 'NOTEFORM_ADD_INFOITEM';
const NOTEFORM_REMOVE_INFOITEM = 'NOTEFORM_REMOVE_INFOITEM';
const NOTEFORM_RESET = 'NOTEFORM_RESET';

const initialState = {
  title: '',
  color: 'DEFAULT',
  information: [],
  validNote: false,
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTEFORM_UPDATE_TITLE: {
      return Object.assign({}, state, { title: action.value });
    }
    case NOTEFORM_UPDATE_COLOR: {
      return Object.assign({}, state, { color: action.value });
    }
    case NOTEFORM_ADD_INFOITEM: {
      const newInformation = [...state.information, action.value];
      return Object.assign({}, state, { information: newInformation });
    }
    case NOTEFORM_REMOVE_INFOITEM: {
      return state.infoItems.filter(infoItem => infoItem.text !== action.value.text);
    }
    case NOTEFORM_RESET: {
      return Object.assign({}, initialState);
    }
    default:
      return state;
  }
};

// ACTION CREATORS
const updateTitle = value => ({
  type: NOTEFORM_UPDATE_TITLE,
  value,
});

const updateColor = value => ({
  type: NOTEFORM_UPDATE_COLOR,
  value,
});

const addInfoItem = info => ({
  type: NOTEFORM_ADD_INFOITEM,
  value: { text: info },
});

const removeInfoItem = value => ({
  type: NOTEFORM_REMOVE_INFOITEM,
  value,
});

const internalFormReset = () => ({
  type: NOTEFORM_RESET,
});

const saveNote = () => (dispatch, getState) => dispatch(
  addNote(getState().noteForm))
  .then(() => {
    dispatch(internalFormReset());
  });

export { updateTitle, updateColor, addInfoItem, removeInfoItem, saveNote };
export default reducer;
