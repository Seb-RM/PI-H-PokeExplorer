import express from "express";
import getPokemonsHandler from "../handlers/pokemonHandler.js"

const router = express.Router();

router.get("/", getPokemonsHandler);

export default router;