import express from "express";
import {
    getPokemonsHandler,
    getPokemonByIdHandler,
    getPokemonsByNameHandler
} from "../handlers/pokemonHandlers.js";

const router = express.Router();

router.get("/", getPokemonsHandler);
router.get("/:idpokemon", getPokemonByIdHandler);
router.get("/search/name", getPokemonsByNameHandler);

export default router;