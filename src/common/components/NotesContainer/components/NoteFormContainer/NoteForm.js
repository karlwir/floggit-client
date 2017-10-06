import React from 'react';

import noteFormProps from './NoteForm.props';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleAddInfoItem = this.handleAddInfoItem.bind(this);
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

  handleSaveNote() {
    this.props.onSaveNote(this.props);
  }

  render() {
    return (
      <div className="NoteForm-wrapper">
        <input
          type="text"
          value={this.props.title}
          onChange={this.handleChangeTitle}
          placeholder="Title"
        /><br />
        <input
          type="color"
          value={this.props.color}
          onChange={this.handleChangeColor}
          placeholder="Title"
        /><br />
        <input
          type="text"
          placeholder="Add item.."
          ref={(c) => { this.infoItemInput = c; }}
        /><br />
        <button type="button" onClick={this.handleAddInfoItem}>
          Add item
        </button>
        <ul>
          {this.props.information.map(infoItem => (
            <li key={Math.random()}>{infoItem.text}</li>
          ))}
        </ul>
        <button type="button" onClick={this.handleSaveNote}>
          Save Note
        </button>
      </div>
    );
  }
}

NoteForm.propTypes = noteFormProps;

export default NoteForm;
