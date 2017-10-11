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
    <div className={`NoteForm ${props.color}`}>
      <input
        type="text"
        value={props.title}
        onChange={handleChangeTitle}
        placeholder="Add title"
        disabled={props.isLoading}
      /><br />
      <div className="one-line-input">
        <input
          type="text"
          placeholder="Add information"
          disabled={props.isLoading}
          ref={(c) => { infoItemInput = c; }}
        />
        <button
          type="button"
          onClick={handleAddInfoItem}
          disabled={props.isLoading}
        >
            Add
        </button>
      </div>
      <ul className="generic-list info-list">
        {props.information.map(infoItem => (
          <li key={infoItem.id}>{infoItem.text}
            <button
              className="icon-button danger"
              type="button"
              disabled={props.isLoading}
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
        disabled={props.isLoading}
      />
      <button
        type="button"
        onClick={handleSaveNote}
        disabled={props.isLoading}
      >
        {props.id ? 'Update note' : 'Save Note'}
      </button>
      <button
        className="secondary"
        type="button"
        onClick={handleCloseForm}
        disabled={props.isLoading}
      >
        Cancel
      </button>
    </div>
  );
};

NoteForm.propTypes = noteFormProps;

export default NoteForm;
