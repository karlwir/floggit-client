import React from 'react';

import NoteFormContainer from './components/NoteFormContainer';
import NoteList from './components/NoteList';
import './note-wrapper.css';

import notesWrapperProps from './NotesWrapper.props';

const NotesWrapper = props => (
  <div className="NotesContainer-wrapper">
    <NoteFormContainer />
    <NoteList className="NoteList" notes={props.notes} onRemoveNote={props.handleRemoveNote} />
  </div>
);

NotesWrapper.propTypes = notesWrapperProps;

export default NotesWrapper;
