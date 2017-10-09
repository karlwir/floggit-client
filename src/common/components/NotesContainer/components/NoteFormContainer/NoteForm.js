import React from 'react';

import noteFormProps from './NoteForm.props';
import './note-form.css';

const NoteForm = (props) => {
  let infoItemInput;

  const handleChangeTitle = (event) => {
    props.onTitleUpdate(event.target.value);
  };

  const handleChangeColor = (event) => {
    props.onColorUpdate(event.target.value);
  };

  const handleAddInfoItem = () => {
    props.onAddInfoItem(infoItemInput.value);
    infoItemInput.value = '';
  };

  const handleRemoveInfoItem = (id) => {
    props.onRemoveInfoItem(id);
  };

  const handleSaveNote = () => {
    props.onSaveNote();
  };

  const handleCloseForm = () => {
    props.onCloseForm();
  };

  return (
    <div className={`NoteForm-wrapper ${props.activeForm ? 'shown' : 'hidden'}`}>
      <div
        className="shade-click-area"
        onClick={handleCloseForm}
        tabIndex={-1}
        role="link"
      />
      <div className="NoteForm">
        <button className="icon-button close" type="button" onClick={handleCloseForm}>
          <i className="fa fa-close" />
        </button>
        {props.id ? 'Update note' : 'Create new note'}
        <input
          type="text"
          value={props.title}
          onChange={handleChangeTitle}
          placeholder="Add title"
        /><br />
        <div className="one-line-input">
          <input
            type="text"
            placeholder="Add information"
            ref={(c) => { infoItemInput = c; }}
          /><br />
          <button type="button" onClick={handleAddInfoItem}>
              Add
          </button>
        </div>
        <ul className="generic-list info-list">
          {props.information.map(infoItem => (
            <li key={infoItem.id}>{infoItem.text}
              <button
                className="icon-button danger"
                type="button"
                onClick={() => handleRemoveInfoItem(infoItem.id)}
              >
                <i className="fa fa-trash" />
              </button>
            </li>
          ))}
        </ul>
        <div className="color-selectors">
          <input
            type="radio"
            className="color-select DEFAULT"
            value="DEFAULT"
            name="color"
            id="color1"
            checked={props.color === 'DEFAULT'}
            onChange={handleChangeColor}
          />
          <input
            type="radio"
            className="color-select SUCCESS"
            value="SUCCESS"
            name="color"
            id="color2"
            checked={props.color === 'SUCCESS'}
            onChange={handleChangeColor}
          />
          <input
            type="radio"
            className="color-select INFO"
            value="INFO"
            name="color"
            id="color3"
            checked={props.color === 'INFO'}
            onChange={handleChangeColor}
          />
          <input
            type="radio"
            className="color-select DANGER"
            value="DANGER"
            name="color"
            id="color4"
            checked={props.color === 'DANGER'}
            onChange={handleChangeColor}
          />
        </div>
        <button type="button" onClick={handleSaveNote}>
          {props.id ? 'Update note' : 'Save Note'}
        </button>
      </div>
    </div>
  );
};

NoteForm.propTypes = noteFormProps;

export default NoteForm;
