import React from "react";

const SearchItem = ({ userEntry }) => {

  return (
    <div className="searchDiv">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search City"
          onKeyDown={userEntry}
          onChange={event => event.target.value}
        />
        {/* <button type="submit" className="searchButton" >Search</button> */}
      </form>
    </div>
  );
};

export default SearchItem;
