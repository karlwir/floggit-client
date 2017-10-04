import React from 'react';

import noteInputProps from './NoteInput.props';

const NoteInput = (props) => {
  let title;
  let color;
  let itemOne;
  let itemTwo;

  const handleCreateNoteClick = () => {
    const value = {
      title: title.value,
      color: 'red',
      information: [{ text: itemOne.value }, { text: itemTwo.value }] 
    };
    // title.value, 'red', [{ text: itemOne.value }, { text: itemTwo.value }]
    props.onCreateNote(value);
  };

  return (
    <div>
      <input
        type="text"
        ref={(c) => { title = c; }}
      />
      <button type="button" onClick={handleCreateNoteClick}>
                Create Note
      </button>

      {/* not a permanent solution */}
      <ul>
        <li>
          <input
            type="text"
            ref={(c) => { itemOne = c; }}
          />
        </li>
        <li>
          <input
            type="text"
            ref={(c) => { itemTwo = c; }}
          />
        </li>
      </ul>

    </div>
  );
};

NoteInput.propTypes = noteInputProps;

export default NoteInput;
