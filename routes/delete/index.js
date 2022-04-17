const express = require("express");
const router = express();

const pokemonData = require("../../assets/pokedex.json");

router.delete("/delete", (req, res) => {
  const { body } = req;
  try {
    const pokemons = pokemonData.filter((item) => item.id !== body.id);
    res.status(200).send({ message: "Deleted Pokemon with id=" + body.id });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
