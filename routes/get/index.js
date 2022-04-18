const THUMBNAIL_LOCATION = "../../assets/thumbnails/";

const express = require("express");
const { getPokemonByID, getPokemonByType, getAllPokemons } = require("../../middlewares/helper");

const router = express();

router.get("/", (req, res) => {
  try {
    const pokemonData = getAllPokemons();
    res.status(200).send({ data: pokemonData });
  } catch (err) {
    console.error(err);
    res.send(401).send({ error: err });
  }
});

router.get("/pokemon/:pokemonid", (req, res) => {
  const id = req.params.pokemonid;
  const pokemon = getPokemonByID(id);
  console.log(pokemon);
  try {
    res.status(200).send({ data: pokemon });
  } catch (err) {
    console.error(err);
    res.status(401).send({ error: "Error in getting Pokemon" });
  }
});

router.get("/pokemon-type/:type", (req, res) => {
  const type = req.params.type;
  const pokemons = getPokemonByType(type);
  console.log(pokemons);
  if (pokemons) {
    res.status(200).send({ data: pokemons });
  } else {
    res.status(401).send({ error: "Error in getting Pokemon" });
  }
});

module.exports = router;
