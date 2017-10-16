import React from 'react';
import { NavLink } from 'react-router-dom';
import boardPropTypes from './Board.props';

import './Board.css';

const Board = (props) => {
  const remove = () => {
    props.onRemoveBoard(props.id);
  };
  const edit = () => {
    props.onUpdateBoard(props);
  };

  return (
    <div className={`Board ${props.colorTheme}`}>
      <NavLink to={`/board/${props.id}`}>
        <div className="board-content">
          <h3>{props.title}</h3>
        </div>
      </NavLink>
      <div className="Board-toolbar">
        <button className="icon-button danger" type="button" onClick={remove}>
          <i className="fa fa-trash fa-lg" />
        </button>
        <button className="icon-button" type="button" onClick={edit}>
          <i className="fa fa-pencil fa-lg" />
        </button>
      </div>
    </div>
  );
};

Board.propTypes = boardPropTypes;

export default Board;
