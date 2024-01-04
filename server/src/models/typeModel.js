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
    },
    { timestamps: false }
);

export default Type;