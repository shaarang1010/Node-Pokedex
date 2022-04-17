const express = require("express");

const router = express();

const pokemonData = require("../../assets/pokedex.json");

router.put("/edit-pokemon", (req, res) => {
  const { body } = req.body;
  try {
    const pokemons = pokemonData.filter((item) => item.id !== body.id);
    res.send(200).send({ data: pokemons });
  } catch (err) {
    console.error(err);
    res.send(401).send({ error: err });
  }
});

module.exports = router;
