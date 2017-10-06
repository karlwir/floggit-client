import React from 'react';
import Note from './components/Note';
import noteListProps from './NoteList.props';
import './note-list.css';

const NoteList = props => (
  <ul className="NoteList">
    {props.notes.map(note => (
      <li key={note.id} className={`Note ${note.color}`}>
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          color={note.color}
          information={note.information}
          onRemoveNote={props.onRemoveNote}
        />
      </li>
    ))}
  </ul>
);

NoteList.propTypes = noteListProps;

export default NoteList;
