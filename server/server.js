import "dotenv/config";
import server from "./src/App.js";
import sequelize from "./src/DB_connection.js";


const { PORT } = process.env

sequelize.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        console.log(`Servidor funcionando en puerto: ${PORT}`);
    });
});