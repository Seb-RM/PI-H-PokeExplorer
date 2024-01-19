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
        console.log(error);
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
        if(Array.isArray(response.data)){
            const filteredPokemons = response.data.filter(
                (pokemon) => pokemon.nombre.toLowerCase() === searchTerm.toLowerCase()
            );

            if(filteredPokemons.length >=1) {
                dispatch({
                type: actionTypes.SEARCH_POKEMONS_BY_NAME_SUCCESS,
                payload: filteredPokemons,
                });
            } else {
                dispatch({
                    type: actionTypes.SEARCH_POKEMONS_BY_NAME_FAILURE,
                    payload: {"message": "No se encontraron Pokemons con ese nombre."},
                });
            }
        
        } else {
            dispatch({
                type: actionTypes.SEARCH_POKEMONS_BY_NAME_FAILURE,
                payload: response.data,
            });
        }
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

const deletePokemonRequest = () => ({
    type: actionTypes.DELETE_POKEMON_REQUEST,
});

const deletePokemonSuccess = (message) => ({
    type: actionTypes.DELETE_POKEMON_SUCCESS,
    payload: message,
});

const deletePokemonFailure = (error) => ({
    type: actionTypes.DELETE_POKEMON_FAILURE,
    payload: error,
});

export const deletePokemon = (id) => {
    return async (dispatch) => {
        dispatch(deletePokemonRequest());
        try {
            const response = await axios.delete(
            `http://localhost:3001/pokemons/${id}`
            );

            if (response.data.success) {
            dispatch(deletePokemonSuccess(response.data.message));
            } else {
            dispatch(deletePokemonFailure(response.data.message));
            }
        } catch (error) {
            dispatch(deletePokemonFailure(error.message));
        }
    };
};