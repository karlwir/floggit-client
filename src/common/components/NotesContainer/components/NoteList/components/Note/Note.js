import React from 'react';
import notePropTypes from './Note.props';

const Note = (props) => {
  const remove = () => {
    props.onRemoveNote(props.id);
  };
  const edit = () => {
    alert('tjena');
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <ul className="generic-list">
        {props.information.map(item => (
          <li key={item.id}> {item.text} </li>
        ))}
      </ul>
      <button className="icon-button danger" type="button" onClick={remove}>
        <i className="fa fa-trash fa-lg" />
      </button>
      <button className="icon-button" type="button" onClick={edit}>
        <i className="fa fa-pencil fa-lg" />
      </button>
    </div>
  );
};

Note.propTypes = notePropTypes;

export default Note;
