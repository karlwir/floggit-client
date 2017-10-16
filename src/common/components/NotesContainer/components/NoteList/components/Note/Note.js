import React from 'react';
import notePropTypes from './Note.props';

import './Note.css';

const Note = (props) => {
  const remove = () => {
    props.onRemoveNote(props.id);
  };
  const edit = () => {
    props.onUpdateNote(props);
  };

  return (
    <div className={`Note ${props.color}`}>
      <div className="note-content">
        <h3>{props.title}</h3>
        <ul className="generic-list information-list">
          {props.information.map(item => (
            <li key={item.id}> {item.text} </li>
          ))}
        </ul>
      </div>
      <div className="note-toolbar">
        <button className="icon-button danger" type="button" onClick={remove}>
          <i className="fa fa-trash fa-lg" />
        </button>
        <button className="icon-button" type="button" onClick={edit}>
          <i className="fa fa-pencil fa-lg" />
        </button>
      </div>
    </div>
  );
};

Note.propTypes = notePropTypes;

export default Note;
