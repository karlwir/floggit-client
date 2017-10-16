import PropTypes from 'prop-types';

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  activeForm: PropTypes.bool.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  colorTheme: PropTypes.string.isRequired,
  onTitleUpdate: PropTypes.func.isRequired,
  onColorThemeUpdate: PropTypes.func.isRequired,
  onSaveBoard: PropTypes.func.isRequired,
  onCloseForm: PropTypes.func.isRequired,
};

export default propTypes;
