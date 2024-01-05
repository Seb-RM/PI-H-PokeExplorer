import {
        getPokemons,
        getPokemonsById,
        getPokemonsByName,
        createPokemon
} from "../controllers/pokemonControllers.js";
import Pokemon from "../models/pokemonModel.js";


const getPokemonsHandler = async (req, res, next) => {
        try {
                await getPokemons(req, res, next);

        } catch (error) {
        next(error);
        }
};

const getPokemonByIdHandler = async (req, res, next) => {
        try {
                const { idpokemon } = req.params;
                const result = await getPokemonsById(idpokemon);
                res.json(result);

        } catch (error) {
        next(error);
        }
};

const getPokemonsByNameHandler = async (req, res, next) => {
        try {
                const { name } = req.query;
                
                const result = await getPokemonsByName(name);

                if (result.length === 0) {
                        res.json({
                        message: "No se encontraron Pokemons con ese nombre.",
                        });
                } else {
                        res.json(result);
                }
        } catch (error) {
                next(error);
        }
};

const createPokemonHandler = async (req, res, next) => {
        try {
        const result = await createPokemon(req.body);

        if (result.success) {
                
                res.status(201).json({
                        message: result.message,
                        pokemon: result.pokemon,
                });
                } else {
                res.status(400).json({
                message: result.message,
                });
        }

        } catch (error) {
        next(error);
        }
};

export { getPokemonsHandler, getPokemonByIdHandler, getPokemonsByNameHandler, createPokemonHandler };