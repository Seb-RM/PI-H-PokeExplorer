import express from "express";
import PokemonRouter from "./pokemonsRoutes.js";


const router = express.Router();

router.use("/pokemons", PokemonRouter )

export default router;