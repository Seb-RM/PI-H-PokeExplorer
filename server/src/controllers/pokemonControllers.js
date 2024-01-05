import { Type, Pokemon } from "../models/index.js";
import {
    getPokemonsFromApi,
    getPokemonDetails,
    getPokemonsFromApiNameControl,
} from "../utils/pokemonsUtils.js";
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

        const pokemonsFromAPI = await Promise.all(
                apiResponse.map(async (filteredPokemon) => {
                const details = await getPokemonDetails(filteredPokemon.url);
                return {
                    id: Number(filteredPokemon.url.split("/").slice(-2, -1)[0]),
                    nombre: filteredPokemon.name,
                    ...details,
                };
            })
        );
    
        const allPokemons = [...filteredPokemons, ...pokemonsFromAPI];

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

            const filteredPokemon = apiResponse.data;
                
            const processedPokemon = {
                id: filteredPokemon.id,
                nombre: filteredPokemon.name,
                imagen:
                    filteredPokemon.sprites.other["official-artwork"].front_default,
                vida: filteredPokemon.stats[0]["base_stat"],
                ataque: filteredPokemon.stats[1]["base_stat"],
                defensa: filteredPokemon.stats[2]["base_stat"],
                velocidad: filteredPokemon.stats[5]["base_stat"],
                altura: filteredPokemon.height,
                peso: filteredPokemon.weight,
                tipos: filteredPokemon.types.map((tipo) => tipo.type.name),
            };

            return processedPokemon;
            }
            
    } catch (error) {
        return error;
    }
};

const getPokemonsByName = async(name) =>{

    try {
        
        const existingPokemons = await Pokemon.findAll({
        where: {
            nombre: {
            [Op.iLike]: `%${name}%`,
            },
        },
        include: [Type],
        });

        const pokemonsFromAPI = await getPokemonsFromApiNameControl(`https://pokeapi.co/api/v2/pokemon`);
    
        const filteredPokemons = pokemonsFromAPI.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(name.toLowerCase())
        );

        const processedPokemons = await Promise.all(
            filteredPokemons.map(async (filteredPokemon) => {
                const details = await getPokemonDetails(filteredPokemon.url);
                return {
                id: Number(filteredPokemon.url.split("/").slice(-2, -1)[0]),
                nombre: filteredPokemon.name,
                ...details,
                };
            })
        );

        const combinedResults = [
            ...existingPokemons,
            ...processedPokemons,
        ];

        return combinedResults;

    } catch (error) {
        throw error;
    }
}; 

export { 
    getPokemons, 
    getPokemonsById,
    getPokemonsByName
};