import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Board from './components/Board';
import boardListProps from './BoardList.props';
import BoardFormContainer from '../BoardFormContainer';
import './BoardList.css';

const SortableItem = SortableElement(({
  value,
  onRemoveBoard,
  onUpdateBoard,
  activeForm,
  boardFormId,
}) => (
  <li key={value.id} className="BoardList-item">
    {activeForm && value.id === boardFormId ?
      <BoardFormContainer /> :
      <Board
        key={value.id}
        id={value.id}
        title={value.title}
        colorTheme={value.colorTheme}
        onRemoveBoard={onRemoveBoard}
        onUpdateBoard={onUpdateBoard}
      />
    }
  </li>
),
);

const SortableList = SortableContainer(({
  items,
  onRemoveBoard,
  onUpdateBoard,
  activeForm,
  boardFormId,
}) => (
  <ul className="BoardList">
    {activeForm && !boardFormId ?
      <li><BoardFormContainer /></li> : '' }
    {items.map((value, index) => (
      <SortableItem
        key={value.id}
        index={index}
        value={value}
        onRemoveBoard={onRemoveBoard}
        onUpdateBoard={onUpdateBoard}
        activeForm={activeForm}
        boardFormId={boardFormId}
      />
    ))}
  </ul>
));

const BoardList = props => (
  <SortableList
    items={props.boards}
    axis="xy"
    distance={5}
    helperClass="BoardList-drag-helper"
    onSortEnd={props.onSortBoard}
    onRemoveBoard={props.onRemoveBoard}
    onUpdateBoard={props.onUpdateBoard}
    activeForm={props.activeForm}
    boardFormId={props.boardFormId}
  />
);

BoardList.propTypes = boardListProps;

export default BoardList;
