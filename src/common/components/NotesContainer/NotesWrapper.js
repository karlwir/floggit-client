import React from 'react';

import NoteFormContainer from './components/NoteFormContainer';
import NoteList from './components/NoteList';
import './NotesWrapper.css';

import notesWrapperProps from './NotesWrapper.props';

const NotesWrapper = (props) => {
  const handleFilter = (event) => {
    props.handleFilter(event.target.value);
  };

  return (
    <div className="NotesContainer-wrapper">
      <NoteFormContainer />
      <div className="NotesContainer-toolbar">
        <button
          type="button"
          className="create-note-button"
          onClick={props.handleCreateNoteNote}
        >
        Create new note
        </button>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="filter-text-input"
            onChange={handleFilter}
          />
          {props.notes.length < props.allNotes.length ?
            <div className="search-message">
              Search matched
              <strong>{props.notes.length}</strong>
              of
              <strong>{props.allNotes.length}</strong>
              notes
            </div>
            : ''}
        </div>
      </div>
      <NoteList
        className="NoteList"
        notes={props.notes}
        onRemoveNote={props.handleRemoveNote}
        onUpdateNote={props.handleUpdateNote}
      />
    </div>
  );
};

NotesWrapper.propTypes = notesWrapperProps;

export default NotesWrapper;
