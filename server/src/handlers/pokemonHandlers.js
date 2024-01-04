import getPokemons from "../controllers/pokemonControllers.js"


const getPokemonsHandler = async (req, res, next) => {

        try {
        await getPokemons(req, res, next);
        } catch (error) {
        next(error);
        }
};

export default getPokemonsHandler;