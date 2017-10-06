import { connect } from 'react-redux';

import NoteForm from './NoteForm';
import { updateTitle, updateColor, addInfoItem, saveNote } from '../../../../../reduxStore/config/note-form';

const mapStateToProps = state => ({
  title: state.noteForm.title,
  color: state.noteForm.color,
  isLoading: state.notes.isLoading,
  information: state.noteForm.information,
});

const mapDispatchToProps = dispatch => ({
  onTitleUpdate: (value) => {
    dispatch(updateTitle(value));
  },
  onColorUpdate: (value) => {
    dispatch(updateColor(value));
  },
  onAddInfoItem: (value) => {
    dispatch(addInfoItem(value));
  },
  onSaveNote: () => {
    dispatch(saveNote());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
