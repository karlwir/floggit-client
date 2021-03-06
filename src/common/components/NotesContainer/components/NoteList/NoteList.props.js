import PropTypes from 'prop-types';

const props = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    information: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })),
  })),
  noteFormId: PropTypes.string,
  activeForm: PropTypes.bool.isRequired,
  boardId: PropTypes.string.isRequired,
  notesCountUnfiltered: PropTypes.number.isRequired,
  boardColorTheme: PropTypes.string.isRequired,
  onRemoveNote: PropTypes.func.isRequired,
  onUpdateNote: PropTypes.func.isRequired,
  onSortNote: PropTypes.func.isRequired,
};

export default props;
