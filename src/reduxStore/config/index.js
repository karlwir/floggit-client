import { combineReducers } from 'redux';
import boards from './boards';
import notes from './notes';
import noteForm from './note-form';

const reducer = combineReducers({
  boards,
  notes,
  noteForm,
});

export default reducer;
