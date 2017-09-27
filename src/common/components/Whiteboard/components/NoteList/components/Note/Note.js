import React from 'react';
import notePropTypes from './Note.props';

const Note = props => (
  <div>
    <h2>{props.title}</h2><br />
            id: {props.id} <br />
            Items:
    <ul>
      {props.information.map(item => (
        <li> {item.text} </li>
      ))}
    </ul>
  </div>
);

Note.propTypes = notePropTypes;

export default Note;
