import PropTypes from 'prop-types';

const props = {
  handleFilter: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.bool.isRequired,
  })),
};

export default props;
