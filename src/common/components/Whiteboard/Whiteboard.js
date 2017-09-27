import React from 'react';

import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';


class Whiteboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NoteInput />
        <NoteList />
      </div>
    );
  }
}


export default Whiteboard;
