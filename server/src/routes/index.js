import express from "express";

import TypeRouter from "./typeRoutes.js";
import PokemonRouter from "./pokemonsRoutes.js";

const router = express.Router();

router.use("/pokemons", PokemonRouter);

router.use("/types", TypeRouter);

export default router;