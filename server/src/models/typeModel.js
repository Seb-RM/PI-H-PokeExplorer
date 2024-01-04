import { DataTypes } from "sequelize";
import sequelize from "../DB_connection.js";

const Type = sequelize.define(
    "Type",
    {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 30],
        },
        },
    },
    { timestamps: false }
);

export default Type;