import { DataTypes } from "sequelize";

import sequelize from "../DB_connection.js";

const Pokemon = sequelize.define(
    "Pokemon",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30],
            },
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true,
        },
        },
        vida: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
            },
        },
        ataque: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
            },
        },
        defensa: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
            },
        },
        velocidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
            },
        },
        altura: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isFloat: true,
            },
        },
        peso: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isFloat: true,
            },
        },
    },
    {
        hooks: {
            beforeValidate: (pokemon) => {
                console.log(pokemon)
                if (pokemon.nombre) {
                    pokemon.nombre = formatearName(pokemon.nombre);
                }
            },
        },
    },
    { timestamps: false },
);

const formatearName = (name) => {
    return name.toLowerCase();
};

export default Pokemon;
