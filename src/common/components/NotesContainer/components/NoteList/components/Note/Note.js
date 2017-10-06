import React from 'react';
import notePropTypes from './Note.props';

const Note = (props) => {
  const remove = () => {
    props.onRemoveNote(props.id);
  };

  return (
    <div>
      <h2>{props.title}</h2><br />
            id: {props.id} <br />
            color: {props.color} <br />
            items:
      <ul>
        {props.information.map(item => (
          <li key={Math.random()}> {item.text} </li>
        ))}
      </ul>
      <button type="button" onClick={remove}>
      Remove Note
      </button>
    </div>
  );
};

Note.propTypes = notePropTypes;

export default Note;
