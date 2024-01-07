import { combineReducers } from "redux";
import pokemonReducer from "./pokemonsReducer.js"

const rootReducer = combineReducers({
    pokemonStates: pokemonReducer,
});

export default rootReducer;