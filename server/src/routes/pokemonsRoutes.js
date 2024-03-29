import express from "express";

import { createPokemonHandler, deletePokemonHandler, getPokemonByIdHandler, getPokemonsByNameHandler, getPokemonsHandler } from "../handlers/pokemonHandlers.js";

const router = express.Router();

router.get("/", getPokemonsHandler);
router.get("/:idpokemon", getPokemonByIdHandler);
router.get("/search/name", getPokemonsByNameHandler);
router.post("/", createPokemonHandler)
router.delete("/:idpokemon", deletePokemonHandler);

export default router;