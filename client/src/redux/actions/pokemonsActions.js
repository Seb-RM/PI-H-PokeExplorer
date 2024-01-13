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

export const filterPokemonsByOrigin = (dataOrigin) =>  {
    return {
        type: actionTypes.FILTER_POKEMONS_BY_ORIGIN,
        payload: dataOrigin,
    };
};

export const filterPokemonsByType = (dataType) => {
    return {
        type: actionTypes.FILTER_POKEMONS_BY_TYPE,
        payload: dataType,
    };
};

export const SearchPokemonsByName = (searchTerm) => async (dispatch) => {
    try {
        const response = await axios.get(
        `http://localhost:3001/pokemons/search/name?name=${searchTerm}`
        );
        dispatch({
        type: actionTypes.SEARCH_POKEMONS_BY_NAME_SUCCESS,
        payload: response.data,
        });
    } catch (error) {
        console.log(error.response)
        dispatch({
        type: actionTypes.SEARCH_POKEMONS_BY_NAME_FAILURE,
        payload: error.message,
        });
    }
};

export const updatePokemons = (pokemons) => {
    return {
    type: actionTypes.UPDATE_POKEMONS,
    payload: pokemons,
    }
};

export const updateLoadingValue = (newValue) => {
    return {
        type: actionTypes.UPDATE_LOADING_VALUE,
        payload: newValue,
    };
};