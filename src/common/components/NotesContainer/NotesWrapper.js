import React from 'react';

import NoteFormContainer from './components/NoteFormContainer';
import NoteList from './components/NoteList';
import './NotesWrapper.css';

import notesWrapperProps from './NotesWrapper.props';

const NotesWrapper = (props) => {
  const handleFilter = (event) => {
    props.handleFilter(event.target.value);
  };

  const renderSearchMessage = (notes) => {
    const notDisplayed = notes.filter(note => !note.display);
    const displayed = notes.filter(note => note.display);
    return notDisplayed.length > 0 ? (<div className="search-message">
    Search matched
      <strong>{displayed.length}</strong>
    of
      <strong>{notes.length}</strong>
    notes
    </div>) : '';
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
          {renderSearchMessage(props.notes)}
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
