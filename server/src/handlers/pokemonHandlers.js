import { getPokemons, getPokemonsById } from "../controllers/pokemonControllers.js";


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

export { 
        getPokemonsHandler, 
        getPokemonByIdHandler 
};