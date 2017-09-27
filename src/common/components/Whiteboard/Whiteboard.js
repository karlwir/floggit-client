import React from 'react';

import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';

import mongoAPI from '../../../utils/repository/mongoAPI';


class Whiteboard extends React.Component {
  constructor() {
    super();

    this.state = {
      notes: [],
    };

    this.handleCreateNote = this.handleCreateNote.bind(this);
  }

  componentDidMount() {
    mongoAPI.getAll()
      .then((data) => {
        data.forEach((item) => {
          this.setState({
            notes: this.state.notes.concat([{
              id: item.id,
              title: item.title,
              color: item.color,
              information: item.information,
            }]),
          });
        });
      });
  }

  handleCreateNote(title, color, information) {
    mongoAPI.add(title, color, information)
      .then((id) => {
        this.setState({
          notes: this.state.notes.concat([{
            id,
            title,
            color,
            information,
          }]),
        });
      });
  }

  render() {
    return (
      <div>
        <NoteInput onCreateNote={this.handleCreateNote} />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}


export default Whiteboard;
