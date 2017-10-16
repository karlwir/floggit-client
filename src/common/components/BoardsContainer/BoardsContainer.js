import { connect } from 'react-redux';

import BoardsWrapper from './BoardsWrapper';
import { removeBoard, filterBoards } from '../../../reduxStore/config/boards';
import { openForm, loadBoard } from '../../../reduxStore/config/board-form';

const mapStateToProps = state => ({
  boards: state.boards.data,
  boardsLoading: state.notes.boards,
  boardForm: state.boardForm,
});

const mapDispatchToProps = dispatch => ({
  handleCreateBoard: () => {
    dispatch(openForm());
  },
  handleRemoveBoard: (value) => {
    dispatch(removeBoard(value));
  },
  handleUpdateBoard: (value) => {
    dispatch(loadBoard(value));
  },
  handleFilter: (value) => {
    dispatch(filterBoards(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardsWrapper);
