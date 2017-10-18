import { connect } from 'react-redux';
import { parse } from 'query-string';

import BoardsWrapper from './BoardsWrapper';
import { removeBoard, filterBoards, sortBoards } from '../../../reduxStore/config/boards';
import { openForm, loadBoard } from '../../../reduxStore/config/board-form';
import { searchFilter } from '../../../utils/helpers/filters/board-filters';

const mapStateToProps = (state, ownProps) => {
  const searchQuery = (parse(ownProps.history.location.search).search || '');
  const allBoards = state.boards.data;
  const boardsToRender = searchFilter(allBoards, searchQuery);

  return ({
    history: ownProps.history,
    boards: boardsToRender,
    boardsCount: boardsToRender.length,
    boardsCountUnfiltered: allBoards.length,
    boardsLoading: state.boards.isLoading,
    boardForm: state.boardForm,
    searchQuery,
  });
};

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
  handleSort: (value) => {
    dispatch(sortBoards(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardsWrapper);
