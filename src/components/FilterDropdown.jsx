import React, { useState } from "react";

const FilterDropdown = ({ onFilter }) => {
  const [selectedType, setSelectedType] = useState("");

  const pokemonTypes = [
    "fire", "water", "grass", "electric", "psychic", "ice", "dragon",
    "dark", "fairy", "normal", "fighting", "flying", "rock", "ground",
    "bug", "ghost", "steel"
  ];

  const handleChange = (e) => {
    setSelectedType(e.target.value);
    onFilter(e.target.value); // Send selected type to parent component
  };

  return (
    <select className="border p-2 rounded-md bg-blue-600 hover:bg-blue-700" value={selectedType} onChange={handleChange}>
      <option value="">All Types</option>
      {pokemonTypes.map((type) => (
        <option key={type} value={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
