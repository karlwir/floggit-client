import React from 'react';

import BoardList from './components/BoardList';
import LoadSpinner from '../LoadSpinner';
import SearchFilter from '../SearchFilter';
import './BoardsWrapper.css';

import boardsWrapperProps from './BoardsWrapper.props';

const BoardsWrapper = props => (
  <div className="BoardsWrapper">
    <div className="breadcrump">
      <h2>Boards</h2>
    </div>
    <div className="toolbar">
      <button
        type="button"
        disabled={props.boardsLoading}
        className="create-board-button"
        onClick={props.handleCreateBoard}
      >
      Create new board
      </button>
      <SearchFilter
        itemsCount={props.boardsCount}
        itemsCountUnfiltered={props.boardsCountUnfiltered}
        history={props.history}
        searchQuery={props.searchQuery}
        handleFilter={props.handleFilter}
      />
      <LoadSpinner showWhen={props.boardsLoading} />
    </div>
    <BoardList
      boards={props.boards}
      boardFormId={props.boardForm.id}
      activeForm={props.boardForm.activeForm}
      onFocusBoard={props.handleFocusBoard}
      onRemoveBoard={props.handleRemoveBoard}
      onUpdateBoard={props.handleUpdateBoard}
      onSortBoard={props.handleSort}
    />
  </div>
);
BoardsWrapper.propTypes = boardsWrapperProps;

export default BoardsWrapper;
