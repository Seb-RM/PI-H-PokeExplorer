import { Type, Pokemon } from "../models/index.js";
import { getPokemonsFromApi, getPokemonDetails} from "../utils/pokemonsUtils.js";
import axios from "axios";
import { Op } from "sequelize";

const getPokemons = async (req, res, next) => {

    try {
        const existingPokemons = await Pokemon.findAll({
            include: [
                {
                model: Type,
                through: {
                    attributes: [],
                },
                },
            ],
        });

        const filteredPokemons = existingPokemons.map((Pokemon) => {
        return {
            id: Pokemon.id,
            nombre: Pokemon.nombre,
            image: Pokemon.image,
            tipos: Pokemon.Type.map((type) => type.nombre),
        };
    });

    const apiResponse = await getPokemonsFromApi(`https://pokeapi.co/api/v2/pokemon`);

    const PokemonsFromAPI = await Promise.all(
        apiResponse.map(async (pokemonFromAPI) => {
            const details = await getPokemonDetails(pokemonFromAPI.url);
            return {
            id: Number(pokemonFromAPI.url.split("/").slice(-2, -1)[0]),
            nombre: pokemonFromAPI.name,
            ...details,
            };
        })
    );
    
    const allPokemons = [...filteredPokemons, ...PokemonsFromAPI];

    if (allPokemons.length === 0) {
        return res.json([]);
    }

    res.json(allPokemons);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default getPokemons;