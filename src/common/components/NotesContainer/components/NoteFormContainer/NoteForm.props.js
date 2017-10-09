import PropTypes from 'prop-types';

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  activeForm: PropTypes.bool.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  information: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  onTitleUpdate: PropTypes.func.isRequired,
  onColorUpdate: PropTypes.func.isRequired,
  onAddInfoItem: PropTypes.func.isRequired,
  onRemoveInfoItem: PropTypes.func.isRequired,
  onSaveNote: PropTypes.func.isRequired,
  onCloseForm: PropTypes.func.isRequired,
};

export default propTypes;
