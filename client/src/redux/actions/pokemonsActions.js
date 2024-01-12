import * as actionTypes from "./action-types.js";

import axios from "axios";

export const fetchPokemons = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3001/pokemons");
        dispatch({
            type: actionTypes.FETCH_POKEMONS_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.FETCH_POKEMONS_FAILURE,
            payload: error.message,
        });
    }
};

export const fetchPokemonDetails = ({id}) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
            dispatch({
                type: actionTypes.FETCH_POKEMONDETAILS_SUCCESS,
                payload: response.data,
            });
    } catch (error) {
        dispatch({
            type: actionTypes.FETCH_POKEMONDETAILS_FAILURE,
            payload: error.message,
        });
    }
};

export const fetchTypes = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3001/types");
        
        dispatch({
            type: actionTypes.FETCH_TYPES_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.FETCH_TYPES_FAILURE,
            payload: error.message,
        });
    }
};

export const createPokemon = (pokemonData) => async (dispatch) => {
    
    try {
        const response = await axios.post("http://localhost:3001/pokemons",pokemonData);
        console.log(response.data)
        dispatch({
        type: actionTypes.CREATE_POKEMON_SUCCESS,
        payload: response.data,
        });
    } catch (error) {
        dispatch({
        type: actionTypes.CREATE_POKEMON_FAILURE,
        payload: error.message,
        });
    }
};

export const sortPokemonsByName = (order) => {
    return {
    type: actionTypes.SORT_POKEMONS_BY_NAME,
    payload: order,
    }
};

export const sortPokemonsByAttack = (order) => {
    return {
        type: actionTypes.SORT_POKEMONS_BY_ATTACK,
        payload: order,
    };
};