import React from 'react';

import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';

import notesWrapperProps from './NotesWrapper.props';

const NotesWrapper = props => (
  <div className="NotesContainer-wrapper">
    <NoteInput onCreateNote={props.handleCreateNote} onAddItem={props.handleAddItem} />
    <NoteList notes={props.notes} />
  </div>
);

NotesWrapper.propTypes = notesWrapperProps;

export default NotesWrapper;
