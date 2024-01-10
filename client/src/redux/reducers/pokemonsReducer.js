import * as actionTypes from "../actions/action-types.js"

const initialState = {
    pokemonsList: [],
    loading: true,
    error: null,
    pokemonDetails: null,
    types: []
};

const pokemonReducer = ( state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_POKEMONS_SUCCESS:
        return {
          ...state,
          pokemonsList: action.payload,
          loading: false,
          error: null,
        };

      case actionTypes.FETCH_POKEMONS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      case actionTypes.FETCH_POKEMONDETAILS_SUCCESS:
        return {
          ...state,
          pokemonDetails: action.payload,
          loading: false,
          error: null,
        };

      case actionTypes.FETCH_POKEMONDETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      case actionTypes.FETCH_TYPES_SUCCESS:
        return {
          ...state,
          types: action.payload,
        };

      case actionTypes.FETCH_TYPES_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
        
      default:
        return state;
    }
};

export default pokemonReducer;