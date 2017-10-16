import React from 'react';
import { NavLink } from 'react-router-dom';
import NoteList from './components/NoteList';
import SearchFilter from '../SearchFilter';
import LoadSpinner from '../LoadSpinner';
import './NotesWrapper.css';

import notesWrapperProps from './NotesWrapper.props';

class NotesWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    this.props.handleFocusBoard(this.props.boardId);
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
              <SearchFilter handleFilter={this.props.handleFilter} items={this.props.notes} />
              <LoadSpinner showWhen={this.props.notesLoading} />
            </div>
            <div>
              <NoteList
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
