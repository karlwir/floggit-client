import PropTypes from 'prop-types';

const props = {
  display: PropTypes.bool,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colorTheme: PropTypes.string.isRequired,
  onRemoveBoard: PropTypes.func.isRequired,
  onUpdateBoard: PropTypes.func.isRequired,
};

export default props;
