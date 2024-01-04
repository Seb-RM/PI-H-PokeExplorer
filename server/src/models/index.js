import Type from "./typeModel.js";
import Pokemon from "./pokemonModel.js";

Pokemon.belongsToMany( Type, {
    through: "PokemonTypes",
    timestamps: false
});

Type.belongsToMany( Pokemon, {
    through: "PokemonTypes",
    timestamps: false,
});

export { Pokemon, Type};