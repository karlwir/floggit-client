import { combineReducers } from 'redux';
import notes from './notes';
import noteForm from './note-form';

const reducer = combineReducers({
  notes,
  noteForm,
});

export default reducer;
