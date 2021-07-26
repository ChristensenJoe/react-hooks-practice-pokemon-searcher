import React from "react";

function Search({ searchData, onSearchChange }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          value={searchData}
          onChange={(event) => {
            onSearchChange(event.target.value);
          }}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
