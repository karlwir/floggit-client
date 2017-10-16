import { connect } from 'react-redux';

import BoardForm from './BoardForm';
import { updateTitle, updateColorTheme, saveBoard, closeForm } from '../../../../../reduxStore/config/board-form';

const mapStateToProps = state => ({
  id: state.boardForm.id,
  title: state.boardForm.title,
  colorTheme: state.boardForm.colorTheme,
  isLoading: state.boards.isLoading,
  activeForm: state.boardForm.activeForm,
});

const mapDispatchToProps = dispatch => ({
  onTitleUpdate: (value) => {
    dispatch(updateTitle(value));
  },
  onColorThemeUpdate: (value) => {
    dispatch(updateColorTheme(value));
  },
  onSaveBoard: () => {
    dispatch(saveBoard());
  },
  onCloseForm: () => {
    dispatch(closeForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);
