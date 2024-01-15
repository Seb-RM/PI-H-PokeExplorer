import express from "express";
import {
    getPokemonsHandler,
    getPokemonByIdHandler,
    getPokemonsByNameHandler,
    createPokemonHandler,
    deletePokemonHandler
} from "../handlers/pokemonHandlers.js";

const router = express.Router();

router.get("/", getPokemonsHandler);
router.get("/:idpokemon", getPokemonByIdHandler);
router.get("/search/name", getPokemonsByNameHandler);
router.post("/", createPokemonHandler)
router.delete("/:idpokemon", deletePokemonHandler);

export default router;