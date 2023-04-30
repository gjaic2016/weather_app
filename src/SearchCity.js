import React from "react";

const SearchItem = ({ userEntry}) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search City"
        onKeyDown={userEntry}
      />
      {/* <button type="submit" onClick={userSearch}>Search</button> */}
    </form>
  );
};

export default SearchItem;
