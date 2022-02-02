const pokemonList = require("../../assets/pokedex.json");
const typesList = require("../../assets/types.json");

const getPokemonByID = (id) => {
  return pokemonList.filter((item) => item.id === id);
};

const getPokemonByName = (pokemonName) => {
  return pokemonList.filter((item) => item.name.english === pokemonName);
};

const getPokemonByType = (type) => {
  return pokemonList.filter((item) => item.type.includes(type));
};

export default { getPokemonByID, getPokemonByName, getPokemonByType };
