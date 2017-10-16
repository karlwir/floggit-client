import PropTypes from 'prop-types';

const propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    information: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })),
  })),
  boardId: PropTypes.string.isRequired,
  focusedBoard: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    colorTheme: PropTypes.string.isRequired,
  }),
  handleRemoveNote: PropTypes.func.isRequired,
  handleUpdateNote: PropTypes.func.isRequired,
};

export default propTypes;
