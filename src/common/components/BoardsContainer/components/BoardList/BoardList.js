import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Board from './components/Board';
import boardListProps from './BoardList.props';
import BoardFormContainer from '../BoardFormContainer';
import './BoardList.css';


const SortableItem = SortableElement(({ value, onRemoveBoard, onUpdateBoard, props }) => (
  <li key={value.id} className="BoardList-item">
    {props.activeForm && value.id === props.boardFormId ?
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

const SortableList = SortableContainer(({ items, onRemoveBoard, onUpdateBoard, props }) => (
  <ul className="BoardList">
    {props.activeForm && !props.boardFormId ?
      <li><BoardFormContainer /></li> : '' }
    {items.map((value, index) => (
      <SortableItem
        key={value.id}
        index={index}
        value={value}
        onRemoveBoard={onRemoveBoard}
        onUpdateBoard={onUpdateBoard}
        props={props}
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
    props={props}
  />
);

BoardList.propTypes = boardListProps;

export default BoardList;
