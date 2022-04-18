const pokemonList = require("../../assets/pokedex.json");
const typesList = require("../../assets/types.json");

const getPokemonByID = (id) => {
  return pokemonList.filter((item) => item.id === Number(id));
};

const getPokemonByName = (pokemonName) => {
  return pokemonList.filter((item) => item.name.english === pokemonName);
};

const getPokemonByType = (type) => {
  return pokemonList.filter((item) => item.type.includes(type));
};

const getAllPokemons = () => {
  return pokemonList;
};

module.exports = { getPokemonByID, getPokemonByName, getPokemonByType, getAllPokemons };
