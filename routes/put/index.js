const express = require("express");

const router = express();

const pokemonData = require("../../assets/pokedex.json");

router.put("/edit-pokemon", (req, res) => {
  const { body } = req;
  try {
    const pokemons = pokemonData.filter((item) => item.id === body.id);
    const editedPokemon = { ...pokemons, body };
    res.send(200).send({ data: [...pokemons, editedPokemon] });
  } catch (err) {
    console.error(err);
    res.send(401).send({ error: err });
  }
});

module.exports = router;
