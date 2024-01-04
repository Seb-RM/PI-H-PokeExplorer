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
            imagen: Pokemon.image,
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

const getPokemonsById = async (idpokemon) => {

    try {
            const isUUID = idpokemon.match(
            /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
            );

            if (isUUID) {

            const existingPokemon = await Pokemon.findByPk(idpokemon, {
                include: [
                    {
                        model: Type,
                        through: {
                        attributes: [],
                        },
                    },
                ],
            });

            if (existingPokemon) {
                const filteredPokemon = {
                id: existingPokemon.id,
                nombre: existingPokemon.name,
                imagen: existingPokemon.image,
                tipos: existingPokemon.Types.map((type) => type.nombre),
                };

                return res.json(filteredPokemon);

            } else {
                throw new Error("Video juego no encontrado en la base de datos.");
            }
            } else {
            
            const apiResponse = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${idpokemon}`
            );

            const pokemonFromAPI = apiResponse.data;
                
            const processedPokemon = {
                id: pokemonFromAPI.id,
                nombre: pokemonFromAPI.name,
                imagen:
                    pokemonFromAPI.sprites.other["official-artwork"].front_default,
                vida: pokemonFromAPI.stats[0]["base_stat"],
                ataque: pokemonFromAPI.stats[1]["base_stat"],
                defensa: pokemonFromAPI.stats[2]["base_stat"],
                velocidad: pokemonFromAPI.stats[5]["base_stat"],
                altura: pokemonFromAPI.height,
                peso: pokemonFromAPI.weight,
                tipos: pokemonFromAPI.types.map((tipo) => tipo.type.name),
            };

            return processedPokemon;
            }
            
    } catch (error) {
        return error;
    }
};

export { 
    getPokemons, 
    getPokemonsById 
};