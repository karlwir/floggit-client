import PropTypes from 'prop-types';

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  information: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
  onTitleUpdate: PropTypes.func.isRequired,
  onColorUpdate: PropTypes.func.isRequired,
  onAddInfoItem: PropTypes.func.isRequired,
  onSaveNote: PropTypes.func.isRequired,
};

export default propTypes;
