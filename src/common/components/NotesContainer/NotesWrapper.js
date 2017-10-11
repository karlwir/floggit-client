import React from 'react';

import NoteFormContainer from './components/NoteFormContainer';
import NoteList from './components/NoteList';
import './NotesWrapper.css';

import notesWrapperProps from './NotesWrapper.props';

const NotesWrapper = (props) => {
  let textInput;
  const handleFilter = (event) => {
    props.handleFilter(event.target.value);
  };

  const clearSearchField = () => {
    textInput.value = '';
    props.handleFilter('');
    textInput.focus();
  };

  const renderSearchMessage = () => {
    const notDisplayed = props.notes.filter(note => !note.display);
    const displayed = props.notes.filter(note => note.display);
    return notDisplayed.length > 0 ? (<div className="search-message">
    Search matched
      <strong>{displayed.length}</strong>
    of
      <strong>{props.notes.length}</strong>
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

        <div className="InputContainer">
          <input
            type="text"
            placeholder="Search"
            className="filter-text-input"
            onChange={handleFilter}
            ref={(input) => { textInput = input; }}
          />
          <span
            className="input-clear-button"
            onClick={clearSearchField}
            role="button"
            tabIndex="0"
          >
            <i className="fa  fa-times-circle" />
          </span>
        </div>
        {renderSearchMessage()}
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
