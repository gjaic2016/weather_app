import React from "react";

const SearchItem = ({ userEntry, searchOnClick }) => {

  const getValue = () => {
    let inputValue = document.getElementById("search").value;
    searchOnClick(inputValue);
  }

  return (
    <div className="searchDiv">
      <form className="searchForm" onSubmit={(e) => {e.preventDefault();}}>
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search City"
          onKeyDown={userEntry}
        />
        <button type="submit" className="searchButton" onClick={getValue}>Search</button>
      </form>
    </div>
  );
};

export default SearchItem;
