import { connect } from 'react-redux';

import NotesWrapper from './NotesWrapper';
import { removeNote, updateNote, loadNotes } from '../../../reduxStore/config/notes';

const mapStateToProps = state => ({
  notes: state.notes.data,
});

const mapDispatchToProps = dispatch => ({
  handleRemoveNote: (value) => {
    dispatch(removeNote(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesWrapper);
