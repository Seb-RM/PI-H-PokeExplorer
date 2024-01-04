import express from "express";
import { getPokemonsHandler, getPokemonByIdHandler } from "../handlers/pokemonHandlers.js";

const router = express.Router();

router.get("/", getPokemonsHandler);
router.get("/:idpokemon", getPokemonByIdHandler);

export default router;