import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Send search query to parent
  };

  return (
    <input
      type="text"
      placeholder="Search Pokémon..."
      className="border p-2 rounded-md w-full text-slate-800 border-gray-300 focus:ring-indigo-500"
      value={query}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
