import PropTypes from 'prop-types';

const props = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    colorTheme: PropTypes.string.isRequired,
  })),
  onRemoveBoard: PropTypes.func.isRequired,
  onUpdateBoard: PropTypes.func.isRequired,
};

export default props;
