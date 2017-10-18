import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Note from './components/Note';
import NoteFormContainer from '../NoteFormContainer';
import noteListProps from './NoteList.props';
import './NoteList.css';

const SortableItem = SortableElement(({ value, onRemoveNote, onUpdateNote, props }) => (
  <li key={value.id} className="NoteList-item">
    {props.activeForm && value.id === props.noteFormId ?
      <NoteFormContainer boardId={props.boardId} /> :
      <Note
        key={value.id}
        id={value.id}
        title={value.title}
        color={value.color}
        priority={value.priority}
        information={value.information}
        onRemoveNote={onRemoveNote}
        onUpdateNote={onUpdateNote}
      />
    }
  </li>
),
);

const SortableList = SortableContainer(({ items, onRemoveNote, onUpdateNote, props }) => (
  <ul className="NoteList">
    {props.activeForm && !props.noteFormId ?
      <li><NoteFormContainer boardId={props.boardId} /></li> : '' }
    {items.map((value, index) => (
      <SortableItem
        key={value.id}
        index={index}
        value={value}
        collection={props.boardId}
        onRemoveNote={onRemoveNote}
        onUpdateNote={onUpdateNote}
        props={props}
      />
    ))}
  </ul>
));

const NoteList = props => (
  <SortableList
    items={props.notes}
    axis="xy"
    distance={5}
    helperClass={`NoteList-drag-helper ${props.boardColorTheme}`}
    onSortEnd={props.onSortNote}
    onRemoveNote={props.onRemoveNote}
    onUpdateNote={props.onUpdateNote}
    props={props}
  />
);

NoteList.propTypes = noteListProps;

export default NoteList;
