import { Sequelize } from "sequelize";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_RAILWAYS_URL} = process.env;

// const sequelize = new Sequelize(
//     `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//     { logging: false }
// );

const sequelize = new Sequelize(
    DB_RAILWAYS_URL,
    { logging: false, native: false }
);

export default sequelize;