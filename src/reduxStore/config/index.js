import { combineReducers } from 'redux';
import boards from './boards';
import notes from './notes';
import noteForm from './note-form';
import boardForm from './board-form';

const reducer = combineReducers({
  boards,
  notes,
  noteForm,
  boardForm,
});

export default reducer;
