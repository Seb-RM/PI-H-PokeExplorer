import { Type, Pokemon } from "../models/index.js";
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

    const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon`);

    console.log(apiResponse.data.results)

    const PokemonsFromAPI = apiResponse.data.results.map((PokemonFromAPI) => ({
        id: Number(PokemonFromAPI.url.split("/").slice(-2, -1)[0]),
        nombre: PokemonFromAPI.name,
    }));

    // const allPokemons = [...filteredPokemons, ...PokemonsFromAPI];

    // if (allPokemons.length === 0) {
    //     return res.json([]);
    // }

    res.json(PokemonsFromAPI);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default getPokemons;