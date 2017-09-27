import React from 'react';
import Note from './components/Note';
import noteListProps from './NoteList.props';

const NoteList = props => (
  <div>
    {props.notes.map(note => (
      <Note
        key={note.id}
        id={note.id}
        title={note.title}
        color={note.color}
        items={note.items}
      />
    ))}
  </div>
);

NoteList.propTypes = noteListProps;

export default NoteList;
