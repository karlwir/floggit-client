import React from 'react';

import noteFormProps from './NoteForm.props';
import './NoteForm.css';
import ColorSelect from './components/ColorSelect';
import { NOTE_COLORS } from '../../../../../utils/constants';

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
        <h3>{props.id ? 'Update note' : 'Create new note'}</h3>
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
          />
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
        <ColorSelect
          colors={NOTE_COLORS}
          selectedColor={props.color}
          onColorUpdate={handleChangeColor}
        />
        <button type="button" onClick={handleSaveNote}>
          {props.id ? 'Update note' : 'Save Note'}
        </button>
      </div>
    </div>
  );
};

NoteForm.propTypes = noteFormProps;

export default NoteForm;
