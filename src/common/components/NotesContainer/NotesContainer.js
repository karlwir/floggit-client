import { connect } from 'react-redux';

import NotesWrapper from './NotesWrapper';
import { addNote, removeNote, updateNote, loadNotes } from '../../../reduxStore/config/notes';

const mapStateToProps = state => ({
  notes: state.notes.data,
});

const mapDispatchToProps = dispatch => ({
  handleCreateNote: (value) => {
    dispatch(addNote(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesWrapper);
