import PropTypes from 'prop-types';

const propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    colorTheme: PropTypes.string.isRequired,
  })),
  handleRemoveBoard: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  boardsCount: PropTypes.number.isRequired,
  boardsCountUnfiltered: PropTypes.number.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default propTypes;
