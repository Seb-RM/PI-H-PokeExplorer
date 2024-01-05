import express from "express";
import PokemonRouter from "./pokemonsRoutes.js";
import TypeRouter from "./typeRoutes.js"


const router = express.Router();

router.use("/pokemons", PokemonRouter);

router.use("/types", TypeRouter);

export default router;