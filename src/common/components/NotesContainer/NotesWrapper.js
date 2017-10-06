import React from 'react';

import NoteFormContainer from './components/NoteFormContainer';
import NoteList from './components/NoteList';

import notesWrapperProps from './NotesWrapper.props';

const NotesWrapper = props => (
  <div className="NotesContainer-wrapper">
    <NoteFormContainer />
    <NoteList notes={props.notes} />
  </div>
);

NotesWrapper.propTypes = notesWrapperProps;

export default NotesWrapper;
