import React from 'react';

const SearchBar = ({ query, setQuery }) => (
  <input
    type="text"
    className="form-control my-3"
    placeholder="Search restaurants..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
);

export default SearchBar;
