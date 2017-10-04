import { connect } from 'react-redux';

import NotesWrapper from './NotesWrapper';
import { addNote, removeNote, updateNote, loadNotes } from '../../../reduxStore/config/notes';

const mapStateToProps = state => ({
  notes: state.data,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesWrapper);
