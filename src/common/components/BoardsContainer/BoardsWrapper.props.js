import PropTypes from 'prop-types';

const propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    colorTheme: PropTypes.string.isRequired,
  })),
  handleRemoveBoard: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default propTypes;
