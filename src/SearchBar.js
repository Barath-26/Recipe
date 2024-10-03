import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
       <input
        type="text"
        placeholder="Search for a recipe..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update state on change
      />
      <button onClick={() => setSearchTerm('')}>Clear</button> {/* Optional: clear button */} 
    </div>
  );
}

export default SearchBar;
