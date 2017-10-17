import { connect } from 'react-redux';

import NotesWrapper from './NotesWrapper';
import { removeNote, filterNotes, sortNotes } from '../../../reduxStore/config/notes';
import { focusBoard } from '../../../reduxStore/config/boards';
import { openForm, loadNote } from '../../../reduxStore/config/note-form';

const mapStateToProps = state => ({
  notes: state.notes.data,
  focusedBoard: state.boards.focusedBoard,
  notesLoading: state.notes.isLoading,
  noteForm: state.noteForm,
});

const mapDispatchToProps = dispatch => ({
  handleFocusBoard: (value) => {
    dispatch(focusBoard(value));
  },
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
  handleSortNote: (value) => {
    dispatch(sortNotes(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesWrapper);
