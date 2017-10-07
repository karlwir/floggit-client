import React from 'react';

import noteFormProps from './NoteForm.props';
import './note-form.css';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleAddInfoItem = this.handleAddInfoItem.bind(this);
    this.handleRemoveInfoItem = this.handleRemoveInfoItem.bind(this);
    this.handleSaveNote = this.handleSaveNote.bind(this);
  }

  handleChangeTitle(event) {
    this.props.onTitleUpdate(event.target.value);
  }

  handleChangeColor(event) {
    this.props.onColorUpdate(event.target.value);
  }

  handleAddInfoItem() {
    this.props.onAddInfoItem(this.infoItemInput.value);
    this.infoItemInput.value = '';
  }

  handleRemoveInfoItem(id) {
    this.props.onRemoveInfoItem(id);
  }

  handleSaveNote() {
    this.props.onSaveNote();
  }

  render() {
    return (
      <div className="NoteForm-wrapper">
        <h3>Create new note</h3>
        <input
          type="text"
          value={this.props.title}
          onChange={this.handleChangeTitle}
          placeholder="Add title"
        /><br />
        <div className="one-line-input">
          <input
            type="text"
            placeholder="Add information"
            ref={(c) => { this.infoItemInput = c; }}
          /><br />
          <button type="button" onClick={this.handleAddInfoItem}>
            Add
          </button>
        </div>
        <ul className="generic-list info-list">
          {this.props.information.map(infoItem => (
            <li key={infoItem.id}>{infoItem.text}
              <button
                className="icon-button"
                type="button"
                onClick={() => this.handleRemoveInfoItem(infoItem.id)}
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
            checked={this.props.color === 'DEFAULT'}
            onChange={this.handleChangeColor}
          />
          <input
            type="radio"
            className="color-select SUCCESS"
            value="SUCCESS"
            name="color"
            id="color2"
            checked={this.props.color === 'SUCCESS'}
            onChange={this.handleChangeColor}
          />
          <input
            type="radio"
            className="color-select INFO"
            value="INFO"
            name="color"
            id="color3"
            checked={this.props.color === 'INFO'}
            onChange={this.handleChangeColor}
          />
          <input
            type="radio"
            className="color-select DANGER"
            value="DANGER"
            name="color"
            id="color4"
            checked={this.props.color === 'DANGER'}
            onChange={this.handleChangeColor}
          />
        </div>
        <button type="button" onClick={this.handleSaveNote}>
          Save Note
        </button>
      </div>
    );
  }
}

NoteForm.propTypes = noteFormProps;

export default NoteForm;
