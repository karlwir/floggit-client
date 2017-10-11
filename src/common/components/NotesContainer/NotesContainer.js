import { connect } from 'react-redux';

import NotesWrapper from './NotesWrapper';
import { removeNote, filterNotes } from '../../../reduxStore/config/notes';
import { openForm, loadNote } from '../../../reduxStore/config/note-form';

const mapStateToProps = state => ({
  notes: state.notes.dataFiltered,
  allNotes: state.notes.data,
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
  handleFilter: (value) => {
    dispatch(filterNotes(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesWrapper);
