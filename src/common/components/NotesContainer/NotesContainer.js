import { connect } from 'react-redux';

import NotesWrapper from './NotesWrapper';
import { removeNote, filterNotes } from '../../../reduxStore/config/notes';
import { openForm, loadNote } from '../../../reduxStore/config/note-form';

const mapStateToProps = state => ({
  notes: state.notes.data,
  notesLoading: state.notes.isLoading,
  noteForm: state.noteForm,
});

const mapDispatchToProps = dispatch => ({
  handleCreateNote: () => {
    dispatch(openForm());
  },
  handleRemoveNote: (value) => {
    dispatch(removeNote(value));
  },
  handleUpdateNote: (value) => {
    dispatch(loadNote(value));
  },
  handleFilter: (value) => {
    dispatch(filterNotes(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesWrapper);
