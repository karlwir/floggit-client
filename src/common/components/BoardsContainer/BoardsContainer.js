import { connect } from 'react-redux';

import BoardsWrapper from './BoardsWrapper';
import { removeBoard, filterBoards } from '../../../reduxStore/config/boards';

const mapStateToProps = state => ({
  boards: state.boards.data,
  boardsLoading: state.notes.boards,
});

const mapDispatchToProps = dispatch => ({
  handleRemoveBoard: (value) => {
    dispatch(removeBoard(value));
  },
  handleUpdateBoard: (value) => {
    dispatch(value);
  },
  handleFilter: (value) => {
    dispatch(filterBoards(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardsWrapper);
