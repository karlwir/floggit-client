import React from 'react';
import { stringify } from 'query-string';
import searchFilterProps from './SearchFilter.props';
import './SearchFilter.css';

const SearchFilter = (props) => {
  let textInput;
  let clearButton;
  const location = props.history.location;
  const history = props.history;

  const handleFilter = (event) => {
    const queryObject = { search: event.target.value };
    if (queryObject.search.length > 0) {
      clearButton.classList.add('visible');
      history.replace({
        pathname: location.pathname,
        search: `?${stringify(queryObject)}`,
      });
    } else {
      clearButton.classList.remove('visible');
      history.replace({
        pathname: location.pathname,
      });
    }
    props.handleFilter(queryObject.search);
  };

  const clearSearchField = () => {
    textInput.value = '';
    clearButton.classList.remove('visible');
    history.replace({
      pathname: location.pathname,
    });
    props.handleFilter('');
  };

  const renderSearchMessage = (itemsCountUnfiltered, itemsCount) =>
    (itemsCountUnfiltered > itemsCount ? (
      <div className={`search-message ${itemsCount === 0 ? 'no-hits' : ''}`}>
          Search matched
        <strong>{itemsCount}</strong>
          of
        <strong>{itemsCountUnfiltered}</strong>
      </div>) : '');

  return (
    <div className="SearchFilter">
      <div className="InputContainer">
        <input
          type="text"
          placeholder="Search"
          className="filter-text-input"
          onChange={handleFilter}
          value={props.searchQuery}
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
      {renderSearchMessage(props.itemsCountUnfiltered, props.itemsCount)}
    </div>
  );
};

SearchFilter.propTypes = searchFilterProps;

export default SearchFilter;
