import React from 'react';

import boardFormProps from './BoardForm.props';
import './BoardForm.css';
import ColorSelect from '../../../ColorSelect';
import { BOARD_COLORS } from '../../../../../utils/constants';

const BoardForm = (props) => {
  const handleChangeTitle = (event) => {
    props.onTitleUpdate(event.target.value);
  };

  const handleChangeColor = (event) => {
    props.onColorThemeUpdate(event.target.value);
  };

  const handleSaveBoard = () => {
    props.onSaveBoard();
  };

  const handleCloseForm = () => {
    props.onCloseForm();
  };

  return (
    <div className={`BoardForm ${props.color}`}>
      <div className="inner-wrapper">
        <input
          type="text"
          value={props.title}
          onChange={handleChangeTitle}
          placeholder="Add title"
          disabled={props.isLoading}
        /><br />
        <ColorSelect
          colors={BOARD_COLORS}
          selectedColor={props.colorTheme}
          onColorUpdate={handleChangeColor}
          disabled={props.isLoading}
        />
        <button
          type="button"
          onClick={handleSaveBoard}
          disabled={props.isLoading}
        >
          {props.id ? 'Update board' : 'Save Board'}
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
    </div>
  );
};

BoardForm.propTypes = boardFormProps;

export default BoardForm;
