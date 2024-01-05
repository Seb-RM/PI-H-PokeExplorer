import {
        getPokemons,
        getPokemonsById,
        getPokemonsByName
} from "../controllers/pokemonControllers.js";


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

export { getPokemonsHandler, getPokemonByIdHandler, getPokemonsByNameHandler };