import express from "express";
import getPokemonsHandler from "../handlers/pokemonHandlers.js"

const router = express.Router();

router.get("/", getPokemonsHandler);

export default router;