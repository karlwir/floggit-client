import React from 'react';
import { NavLink } from 'react-router-dom';
import NoteList from './components/NoteList';
import './NotesWrapper.css';

import notesWrapperProps from './NotesWrapper.props';

class NotesWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.handleFilter = this.handleFilter.bind(this);
    this.clearSearchField = this.clearSearchField.bind(this);
    this.renderSearchMessage = this.renderSearchMessage.bind(this);
  }

  componentWillMount() {
    this.props.handleFocusBoard(this.props.boardId);
  }

  handleFilter(event) {
    const query = event.target.value;
    if (query.length > 0) {
      this.clearButton.classList.add('visible');
    } else {
      this.clearButton.classList.remove('visible');
    }
    this.props.handleFilter(query);
  }

  clearSearchField() {
    this.textInput.value = '';
    this.clearButton.classList.remove('visible');
    this.props.handleFilter('');
  }

  renderSearchMessage(notes) {
    this.notDisplayed = notes.filter(note => !note.display);
    this.displayed = notes.filter(note => note.display);
    return this.notDisplayed.length > 0 ? (
      <div className="search-message">
        Search matched
        <strong>{this.displayed.length}</strong>
        notes
      </div>) : '';
  }

  render() {
    return (
      <div>
        {this.props.focusedBoard ?
          <div className={`NotesWrapper ${this.props.focusedBoard.colorTheme}`}>
            <div className="breadcrump">
              <NavLink to="/">Boards </NavLink> » <h2>{this.props.focusedBoard.title}</h2>
            </div>
            <div className="NotesContainer-toolbar">
              <button
                type="button"
                disabled={this.props.notesLoading}
                className="create-note-button"
                onClick={this.props.handleCreateNote}
              >
                Create new note
              </button>

              <div className="InputContainer">
                <input
                  type="text"
                  placeholder="Search"
                  className="filter-text-input"
                  onChange={this.handleFilter}
                  ref={(input) => { this.textInput = input; }}
                />
                <span
                  className="input-clear-button"
                  onClick={this.clearSearchField}
                  role="button"
                  tabIndex="0"
                  ref={(span) => { this.clearButton = span; }}
                >
                  <i className="fa fa-times-circle" />
                </span>
              </div>
              {this.renderSearchMessage(this.props.notes)}
              {this.props.notesLoading ?
                <div className="load-spinner">
                  <i className="fa fa-cog fa-spin fa-2x fa-fw" />
                  Loading
                </div> : '' }
            </div>
            <div>
              <NoteList
                className="NoteList"
                notes={this.props.notes}
                boardId={this.props.boardId}
                noteFormId={this.props.noteForm.id}
                activeForm={this.props.noteForm.activeForm}
                onRemoveNote={this.props.handleRemoveNote}
                onUpdateNote={this.props.handleUpdateNote}
              />
            </div>
          </div>
          : '' }
      </div>
    );
  }
}

NotesWrapper.propTypes = notesWrapperProps;

export default NotesWrapper;
