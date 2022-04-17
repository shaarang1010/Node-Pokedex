const express = require("express");
const bodyparser = require("body-parser");
const router = express();
const pokemonData = require("../../assets/pokedex.json");

router.post("/add-pokemon", (req, res) => {
  const { body } = req;
  try {
    const newPokemonData = [...pokemonData, body];
    res.status(201).send(newPokemonData);
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
});

module.exports = router;
