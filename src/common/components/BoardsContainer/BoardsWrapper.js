import React from 'react';

import BoardList from './components/BoardList';
import './BoardsWrapper.css';

import boardsWrapperProps from './BoardsWrapper.props';

const BoardsWrapper = (props) => {
  let textInput;
  let clearButton;

  const handleFilter = (event) => {
    const query = event.target.value;
    if (query.length > 0) {
      clearButton.classList.add('visible');
    } else {
      clearButton.classList.remove('visible');
    }
    props.handleFilter(query);
  };

  const clearSearchField = () => {
    textInput.value = '';
    clearButton.classList.remove('visible');
    props.handleFilter('');
  };

  const renderSearchMessage = (boards) => {
    const notDisplayed = boards.filter(board => !board.display);
    const displayed = boards.filter(board => board.display);
    return notDisplayed.length > 0 ? (<div className="search-message">
    Search matched
      <strong>{displayed.length}</strong>
    of
      <strong>{boards.length}</strong>
    boards
    </div>) : '';
  };

  return (
    <div className="BoardsContainer-wrapper">
      <div className="breadcrump">
        <h2>Boards</h2>
      </div>
      <div className="BoardsContainer-toolbar">
        <button
          type="button"
          disabled={props.boardsLoading}
          className="create-board-button"
          onClick={props.handleCreateBoard}
        >
        Create new board
        </button>

        <div className="InputContainer">
          <input
            type="text"
            placeholder="Search"
            className="filter-text-input"
            onChange={handleFilter}
            ref={(input) => { textInput = input; }}
          />
          <span
            className="input-clear-button"
            onClick={clearSearchField}
            role="button"
            tabIndex="0"
            ref={(span) => { clearButton = span; }}
          >
            <i className="fa fa-times-circle" />
          </span>
        </div>
        {renderSearchMessage(props.boards)}
        {props.boardsLoading ?
          <div className="load-spinner">
            <i className="fa fa-cog fa-spin fa-2x fa-fw" />
            Loading
          </div> : '' }
      </div>
      <BoardList
        className="NoteList"
        boards={props.boards}
        boardFormId={props.boardForm.id}
        activeForm={props.boardForm.activeForm}
        onFocusBoard={props.handleFocusBoard}
        onRemoveBoard={props.handleRemoveBoard}
        onUpdateBoard={props.handleUpdateBoard}
      />
    </div>
  );
};
BoardsWrapper.propTypes = boardsWrapperProps;

export default BoardsWrapper;
