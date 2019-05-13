import './Search.css';

import { observer } from 'mobx-react';
import React, { RefObject } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

import searchState from './Search.state';

@observer
class Search extends React.Component {
  inputRef: RefObject<HTMLInputElement> = React.createRef();

  render() {
    return (
      <div className="search-container">
        {searchState.hasSearchInput ? (
          <FiX onClick={() => searchState.clear()} className="search-icon" />
        ) : (
          <FiSearch
            onClick={() => this.inputRef.current.focus()}
            className="search-icon"
          />
        )}

        <input
          ref={this.inputRef}
          className="search-input"
          type="text"
          value={searchState.searchInput}
          onChange={v => searchState.setSearchInput(v.target.value)}
        />
      </div>
    );
  }
}

export default Search;
