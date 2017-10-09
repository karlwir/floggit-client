import { connect } from 'react-redux';

import NoteForm from './NoteForm';
import { updateTitle, updateColor, addInfoItem, removeInfoItem, saveNote, closeForm } from '../../../../../reduxStore/config/note-form';

const mapStateToProps = state => ({
  id: state.noteForm.id,
  title: state.noteForm.title,
  color: state.noteForm.color,
  isLoading: state.notes.isLoading,
  activeForm: state.noteForm.activeForm,
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
  onRemoveInfoItem: (value) => {
    dispatch(removeInfoItem(value));
  },
  onSaveNote: () => {
    dispatch(saveNote());
  },
  onCloseForm: () => {
    dispatch(closeForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
