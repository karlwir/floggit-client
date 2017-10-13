import React from 'react';
import Board from './components/Board';
import boardListProps from './BoardList.props';
import './BoardList.css';

const BoardList = props => (
  <ul className="BoardList">
    {props.boards.filter(board => (board.display))
      .map(board => (
        <li key={board.id}>
          <Board
            key={board.id}
            id={board.id}
            title={board.title}
            colorTheme={board.colorTheme}
            onRemoveBoard={props.onRemoveBoard}
            onUpdateBoard={props.onUpdateBoard}
          />
        </li>
      ))}
  </ul>
);

BoardList.propTypes = boardListProps;

export default BoardList;
