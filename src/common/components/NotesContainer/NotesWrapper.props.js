import PropTypes from 'prop-types';

const propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    information: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
    })),
  })),
  handleCreateNote: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
};

export default propTypes;
