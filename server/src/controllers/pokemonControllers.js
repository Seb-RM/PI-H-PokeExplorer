import axios from "axios";
import { Op } from "sequelize";

import { Pokemon, Type } from "../models/index.js";
import { getPokemonDetails, getPokemonsFromApi, getPokemonsFromApiNameControl } from "../utils/pokemonsUtils.js";

const getPokemons = async (req, res, next) => {

    try {
        const existingPokemons = await Pokemon.findAll(
            {
            include: [
                {
                model: Type,
                through: {
                    attributes: [],
                },
                },
            ],
        }
        );
        
        const filteredPokemons = existingPokemons.map((Pokemon) => {
            return {
                id: Pokemon.id,
                nombre: Pokemon.nombre,
                imagen: Pokemon.imagen,
                vida: Pokemon.vida,
                ataque: Pokemon.ataque,
                defensa: Pokemon.defensa,
                velocidad: Pokemon.velocidad,
                altura: Pokemon.altura,
                peso: Pokemon.peso,
                tipos: Pokemon.Types.map((type) => type.nombre),
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
    
        const allPokemons = [...filteredPokemons, ...pokemonsFromAPI ];

        if (allPokemons.length === 0) {
            return res.json([]);
        }

        res.json(allPokemons);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPokemonsById = async (id) => {

    try {
            const isUUID = id.match(
            /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
            );
                
            if (isUUID) {

                const existingPokemon = await Pokemon.findByPk(id, {
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
                        nombre: existingPokemon.nombre,
                        imagen: existingPokemon.imagen,
                        vida: existingPokemon.vida,
                        ataque: existingPokemon.ataque,
                        defensa: existingPokemon.defensa,
                        velocidad: existingPokemon.velocidad,
                        altura: existingPokemon.altura,
                        peso: existingPokemon.peso,
                        tipos: existingPokemon.Types.map((type) => type.nombre)
                    };
                    
                    return filteredPokemon;

                } else {

                    throw new Error("El Pokemon no fue  encontrado en la base de datos.");
                }
            } else {
            
            const apiResponse = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${id}`
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
        throw error;
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
            include: [
                {
                model: Type,
                    through: {
                        attributes: [],
                    }
                }
            ]
        });

        const filteredPokemonsDb = existingPokemons.map((Pokemon) => {
            return {
                id: Pokemon.id,
                nombre: Pokemon.nombre,
                imagen: Pokemon.imagen,
                vida: Pokemon.vida,
                ataque: Pokemon.ataque,
                defensa: Pokemon.defensa,
                velocidad: Pokemon.velocidad,
                altura: Pokemon.altura,
                peso: Pokemon.peso,
                tipos: Pokemon.Types.map((type) => type.nombre),
            };
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
            ...filteredPokemonsDb,
            ...processedPokemons,
        ];

        return combinedResults;

    } catch (error) {
        throw error;
    }
}; 

const createPokemon = async ({
    nombre,
    imagen,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
    tipos
    }) => {
        try {
            if (
            !nombre ||
            !imagen ||
            !vida ||
            !ataque ||
            !defensa ||
            !velocidad ||
            !altura ||
            !peso ||
            !tipos
            ) {
                throw new Error("Todos los campos son obligatorios.");
            }
            
            if (!Array.isArray(tipos) || tipos.length === 0) {
                throw new Error("Se debe proporcionar al menos un tipo.");
            }

            const existingTypes = await Type.findAll({ where: { nombre: tipos } });
            
            if (existingTypes.length !== tipos.length) {
            throw new Error("Alguno de los géneros proporcionados no existe.");
            }

            const newPokemon = await Pokemon.create({
                nombre,
                imagen,
                vida,
                ataque,
                defensa,
                velocidad,
                altura,
                peso
            });

            await newPokemon.addTypes(existingTypes);

            return {
                success: true,
                message: "Pokemon creado correctamente",
                pokemon: newPokemon,
            };
        } catch (error) {
            throw error;
        }
};

const deletePokemon = async (req, res, next) => {

    try {
        const { idpokemon } = req.params;
        console.log(idpokemon)
        let data = await Pokemon.destroy({
            where: {
                id: idpokemon,
            },
        });
        if (data === 1) {
            return res.status(200).json({
                success: true,
                message: `El Pokemon fue eliminado de la base de datos.`,
        });
        }
        return res.status(200).json({
            success: false,
            message: `No se pudo realizar la operación, Pokemon no existente.`,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

export { 
    getPokemons, 
    getPokemonsById,
    getPokemonsByName,
    createPokemon,
    deletePokemon
};