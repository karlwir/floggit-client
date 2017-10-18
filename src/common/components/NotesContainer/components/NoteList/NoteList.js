import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Note from './components/Note';
import NoteFormContainer from '../NoteFormContainer';
import noteListProps from './NoteList.props';
import './NoteList.css';

const SortableItem = SortableElement(({
  value,
  onRemoveNote,
  onUpdateNote,
  activeForm,
  noteFormId,
  boardId,
}) => (
  <li key={value.id} className="NoteList-item">
    {activeForm && value.id === noteFormId ?
      <NoteFormContainer boardId={boardId} /> :
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

const SortableList = SortableContainer(({
  items,
  onRemoveNote,
  onUpdateNote,
  activeForm,
  noteFormId,
  boardId,
}) => (
  <ul className="NoteList">
    {activeForm && !noteFormId ?
      <li><NoteFormContainer boardId={boardId} /></li> : null }
    {items.map((value, index) => (
      <SortableItem
        key={value.id}
        index={index}
        value={value}
        collection={boardId}
        onRemoveNote={onRemoveNote}
        onUpdateNote={onUpdateNote}
        activeForm={activeForm}
        noteFormId={noteFormId}
        boardId={boardId}
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
    activeForm={props.activeForm}
    noteFormId={props.noteFormId}
    boardId={props.boardId}
  />
);

NoteList.propTypes = noteListProps;

export default NoteList;
