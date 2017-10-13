import React from 'react';
import Note from './components/Note';
import NoteFormContainer from '../NoteFormContainer';
import noteListProps from './NoteList.props';
import './NoteList.css';

const NoteList = props => (
  <ul className="NoteList">
    {props.activeForm && !props.noteFormId ?
      <li><NoteFormContainer boardId={props.boardId} /></li> : '' }
    {props.notes.filter(note =>
      (note.display) && props.boardId === note.boardId,
    ).map(note => (
      <li key={note.id}>
        {props.activeForm && note.id === props.noteFormId ?
          <NoteFormContainer boardId={props.boardId} /> :
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            color={note.color}
            information={note.information}
            onRemoveNote={props.onRemoveNote}
            onUpdateNote={props.onUpdateNote}
          />
        }
      </li>
    ))}
  </ul>
);

NoteList.propTypes = noteListProps;

export default NoteList;
