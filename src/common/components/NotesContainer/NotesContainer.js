import { connect } from 'react-redux';

import NotesWrapper from './NotesWrapper';
import { removeNote, updateNote, loadNotes } from '../../../reduxStore/config/notes';
import { openForm, loadNote } from '../../../reduxStore/config/note-form';

const mapStateToProps = state => ({
  notes: state.notes.data,
});

const mapDispatchToProps = dispatch => ({
  handleCreateNoteNote: () => {
    dispatch(openForm());
  },
  handleRemoveNote: (value) => {
    dispatch(removeNote(value));
  },
  handleUpdateNote: (value) => {
    dispatch(loadNote(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesWrapper);
