import PropTypes from 'prop-types';

const props = {
  colors: PropTypes.arrayOf(PropTypes.string.isRequired),
  selectedColor: PropTypes.string.isRequired,
  onColorUpdate: PropTypes.func.isRequired,
};

export default props;
