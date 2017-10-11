import React from 'react';
import Note from './components/Note';
import noteListProps from './NoteList.props';
import './NoteList.css';

const NoteList = props => (
  <ul className="NoteList">
    {props.notes.filter(note => (note.display))
      .map(note => (
        <li key={note.id}>
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            color={note.color}
            information={note.information}
            onRemoveNote={props.onRemoveNote}
            onUpdateNote={props.onUpdateNote}
          />
        </li>
      ))}
  </ul>
);

NoteList.propTypes = noteListProps;

export default NoteList;
