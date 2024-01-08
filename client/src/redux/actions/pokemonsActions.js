import axios from "axios";
import * as actionTypes from "./action-types.js";

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
