import { connect } from 'react-redux';
import { parse } from 'query-string';

import NotesWrapper from './NotesWrapper';
import { removeNote, filterNotes, sortNotes } from '../../../reduxStore/config/notes';
import { focusBoard } from '../../../reduxStore/config/boards';
import { openForm, loadNote } from '../../../reduxStore/config/note-form';
import { searchFilter, boardFilter } from '../../../utils/helpers/filters/note-filters';

const mapStateToProps = (state, ownProps) => {
  const searchQuery = (parse(ownProps.history.location.search).search || '');
  const boardNotes = boardFilter(state.notes.data, ownProps.boardId);
  let notesToRender;
  if (searchQuery.length > 0) {
    notesToRender = searchFilter(boardNotes, searchQuery);
  } else {
    notesToRender = boardNotes;
  }

  return ({
    history: ownProps.history,
    notes: notesToRender,
    notesCount: notesToRender.length,
    notesCountUnfiltered: boardNotes.length,
    focusedBoard: state.boards.focusedBoard,
    notesLoading: state.notes.isLoading,
    noteForm: state.noteForm,
    searchQuery,
  });
};

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
