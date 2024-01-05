import express from "express";
import {
    getPokemonsHandler,
    getPokemonByIdHandler,
    getPokemonsByNameHandler,
    createPokemonHandler
} from "../handlers/pokemonHandlers.js";

const router = express.Router();

router.get("/", getPokemonsHandler);
router.get("/:idpokemon", getPokemonByIdHandler);
router.get("/search/name", getPokemonsByNameHandler);
router.post("/", createPokemonHandler)

export default router;