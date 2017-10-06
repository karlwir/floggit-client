import PropTypes from 'prop-types';

const props = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  information: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
  onRemoveNote: PropTypes.func.isRequired,
};

export default props;
