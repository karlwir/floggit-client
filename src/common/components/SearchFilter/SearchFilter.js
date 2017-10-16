import React from 'react';
import searchFilterProps from './SearchFilter.props';
import './SearchFilter.css';

const SearchFilter = (props) => {
  let textInput;
  let clearButton;
  let notDisplayed;
  let displayed;

  const handleFilter = (event) => {
    const query = event.target.value;
    if (query.length > 0) {
      clearButton.classList.add('visible');
    } else {
      clearButton.classList.remove('visible');
    }
    props.handleFilter(query);
  };

  const clearSearchField = () => {
    textInput.value = '';
    clearButton.classList.remove('visible');
    props.handleFilter('');
  };

  const renderSearchMessage = (items) => {
    notDisplayed = items.filter(item => !item.display);
    displayed = items.filter(item => item.display);
    return notDisplayed.length > 0 ? (
      <div className={`search-message ${displayed.length === 0 ? 'no-hits' : ''}`}>
        Search matched
        <strong>{displayed.length}</strong>
        items
      </div>) : '';
  };

  return (
    <div className="SearchFilter">
      <div className="InputContainer">
        <input
          type="text"
          placeholder="Search"
          className="filter-text-input"
          onChange={handleFilter}
          ref={(input) => { textInput = input; }}
        />
        <span
          className="input-clear-button"
          onClick={clearSearchField}
          role="button"
          tabIndex="0"
          ref={(span) => { clearButton = span; }}
        >
          <i className="fa fa-times-circle" />
        </span>
      </div>
      {renderSearchMessage(props.items)}
    </div>
  );
};

SearchFilter.propTypes = searchFilterProps;

export default SearchFilter;
