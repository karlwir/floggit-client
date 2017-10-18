import PropTypes from 'prop-types';

const props = {
  handleFilter: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  itemsCount: PropTypes.number.isRequired,
  itemsCountUnfiltered: PropTypes.number.isRequired,
};

export default props;
