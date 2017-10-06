import React from 'react';
import Note from './components/Note';
import noteListProps from './NoteList.props';

const NoteList = props => (
  <ul>
    {props.notes.map(note => (
      <li>
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
