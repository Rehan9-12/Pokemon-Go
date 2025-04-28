import React, { useEffect, useState } from "react";
import { getPosts } from "../api/api-fetch";
import PokimonCard from "./PokimonCard";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown"; 
import Header from "./Header";


const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    getPosts().then((data) => {
      setPokemonData(data);
      setFilteredPokemon(data);
    });
  }, []);

  // Function to filter Pokémon based on search & type
  const handleSearch = (query) => {
    setSearchQuery(query);
    applyFilters(query, selectedType);
  };

  const handleFilter = (type) => {
    setSelectedType(type);
    applyFilters(searchQuery, type);
  };

  const applyFilters = (query, type) => {
    let filtered = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

    if (type) {
      filtered = filtered.filter((pokemon) => pokemon.types.includes(type));
    }

    setFilteredPokemon(filtered.length > 0 ? filtered : null);
  };

  if (pokemonData.length === 0) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center gap-4">
      <Header/>
      <SearchBar onSearch={handleSearch} />
      <FilterDropdown onFilter={handleFilter} />
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredPokemon ? (
          filteredPokemon.map((pokemon) => <PokimonCard key={pokemon.id} {...pokemon} />)
        ) : (
          <p className="text-xl font-bold text-gray-600">❌ No Pokémon Found</p>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
