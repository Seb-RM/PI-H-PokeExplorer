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
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: true,
        },
        },
        peso: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: true,
        },
        },
    },
    { timestamps: false },
    {
        hooks: {
        beforeValidate: (Pokemon, options) => {
            if (Pokemon.nombre) {
                Pokemon.nombre = formatearNombre(Pokemon.nombre);
            }
        },
        },
    }
);

const formatearNombre = (nombre) => {
    return nombre.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};


export default Pokemon;
