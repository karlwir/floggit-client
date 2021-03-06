import PropTypes from 'prop-types';

const props = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    colorTheme: PropTypes.string.isRequired,
  })),
  boardFormId: PropTypes.string,
  activeForm: PropTypes.bool.isRequired,
  onSortBoard: PropTypes.func.isRequired,
  onRemoveBoard: PropTypes.func.isRequired,
  onUpdateBoard: PropTypes.func.isRequired,
};

export default props;
