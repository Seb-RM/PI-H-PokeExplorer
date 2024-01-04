import Type from "./typeModel";
import Pokemon from "./pokemonModel";

Pokemon.belongsToMany( Type, {
    through: "PokemonTypes",
    timestamps: false
});

Type.belongsToMany( Pokemon, {
    through: "PokemonTypes",
    timestamps: false,
});

export { Pokemon, Type};