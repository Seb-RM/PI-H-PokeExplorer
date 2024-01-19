import * as actionTypes from "../actions/action-types.js";

const initialState = {
  pokemonsList: [],
  loading: true,
  error: null,
  pokemonDetails: null,
  types: [],
  serverMessage: "",
  filteredPokemons: [],
  unfilteredPokemons: [],
  filteredByOrigin:[],
  updatedList: [],
  deleteStatus: {
    deleting: false,
    success: false,
    error: null,
    message: null, 
  },
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemonsList: action.payload,
        updatedList: action.payload,
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

    case actionTypes.CREATE_POKEMON_SUCCESS: {
      const { message } = action.payload;

      return {
        ...state,
        serverMessage: message,
      };
    }
    case actionTypes.CREATE_POKEMON_FAILURE: {
      const { message } = action.payload;
      return {
        ...state,
        serverMessage: message,
      };
    }
    case actionTypes.SORT_POKEMONS_BY_NAME: {
      const sortedPokemon = [...state.updatedList];
      if (action.payload)
        if (action.payload === "asc") {
          sortedPokemon.sort((a, b) => {
            const nameA = a.nombre.toLowerCase();
            const nameB = b.nombre.toLowerCase();

            if (nameA > nameB) return 1;
            else return -1;
          });
        } else if (action.payload === "desc") {
          sortedPokemon.sort((a, b) => {
            const nameA = a.nombre.toLowerCase();
            const nameB = b.nombre.toLowerCase();

            if (nameA < nameB) return 1;
            else return -1;
          });
        }
      return {
        ...state,
        updatedList: sortedPokemon,
      };
    }
    case actionTypes.SORT_POKEMONS_BY_ATTACK: {
      const sortedPokemon = [...state.updatedList];
      if (action.payload === "asc") {
        sortedPokemon.sort((a, b) => {
          if (a.ataque > b.ataque) return 1;
          else return -1;
        });
      } else if (action.payload === "desc") {
        sortedPokemon.sort((a, b) => {
          if (a.ataque < b.ataque) return 1;
          else return -1;
        });
      }
      return {
        ...state,
        updatedList: sortedPokemon,
      };
    }
    case actionTypes.FILTER_POKEMONS_BY_ORIGIN: {
      const origin = action.payload;
      if (origin === "api") {
        return {
          ...state,
          filteredByOrigin: state.pokemonsList.filter(
            (pokemon) => !isNaN(pokemon.id)
          ),
        };
      } else if (origin === "database") {
        return {
          ...state,
          filteredByOrigin: state.pokemonsList.filter((pokemon) =>
            isNaN(pokemon.id)
          ),
        };
      } else {
        return {
          ...state,
          filteredPokemons: state.pokemonsList,
        };
      }
    }
    case actionTypes.FILTER_POKEMONS_BY_TYPE: {
      const type = action.payload;

      if (type === "all") {
        return {
          ...state,
          filteredPokemons: state.pokemonsList,
        };
      }
      return {
        ...state,
        filteredPokemons: state.updatedList.filter((pokemon) => {
          return pokemon.tipos.includes(type);
        }),
      };
    }
    case actionTypes.UPDATE_POKEMONS:
      return {
        ...state,
        updatedList: action.payload,
        unfilteredPokemons: action.payload,
      };

    case actionTypes.SEARCH_POKEMONS_BY_NAME_SUCCESS: {
      return {
        ...state,
        pokemonsList: action.payload,
        updatedList: action.payload,
        loading: false,
        error: null,
      };
    }
    case actionTypes.SEARCH_POKEMONS_BY_NAME_FAILURE:  {
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };}

    case actionTypes.UPDATE_LOADING_VALUE:
      return {
        ...state,
        loading: action.payload,
      };
    case actionTypes.DELETE_POKEMON_REQUEST:
      return {
        ...state,
        deleteStatus: {
          deleting: true,
          success: false,
          error: null,
          message: null,
        },
      };
      case actionTypes.DELETE_POKEMON_SUCCESS:{
        return {
          ...state,
          deleteStatus: {
            deleting: false,
            success: true,
            error: null,
            message: action.payload,
          },
        };
      }
        case actionTypes.DELETE_POKEMON_FAILURE:
          return {
            ...state,
            deleteStatus: {
              deleting: false,
              success: false,
              error: action.payload,
              message: null,
            },
          };
    default:
      return state;
    }
};

export default pokemonReducer;
