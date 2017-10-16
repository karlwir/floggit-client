import React from 'react';
import colorelectProps from './ColorSelect.props';
import './ColorSelect.css';

const ColorSelect = props => (
  <div className="color-selectors">
    {props.colors.map(color => (
      <input
        type="radio"
        className={`color-select ${color}`}
        key={color}
        value={color}
        name="colorSelect"
        id={color}
        checked={props.selectedColor === color}
        onChange={props.onColorUpdate}
      />
    ))}
  </div>
);

ColorSelect.propTypes = colorelectProps;

export default ColorSelect;
