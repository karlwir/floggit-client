import React from 'react';
import Board from './components/Board';
import boardListProps from './BoardList.props';
import BoardFormContainer from '../BoardFormContainer';
import './BoardList.css';

const BoardList = props => (
  <ul className="BoardList">
    {props.activeForm && !props.boardFormId ?
      <li><BoardFormContainer /></li> : '' }
    {props.boards.filter(board => (board.display))
      .map(board => (
        <li key={board.id}>
          {props.activeForm && board.id === props.boardFormId ?
            <BoardFormContainer /> :
            <Board
              key={board.id}
              id={board.id}
              title={board.title}
              colorTheme={board.colorTheme}
              onRemoveBoard={props.onRemoveBoard}
              onUpdateBoard={props.onUpdateBoard}
            />
          }
        </li>
      ))}
  </ul>
);

BoardList.propTypes = boardListProps;

export default BoardList;
