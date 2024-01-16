import "dotenv/config";
import sequelize from "./src/DB_connection.js";
import server from "./src/App.js";


const { PORT } = process.env

sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log(`Servidor funcionando en puerto: ${PORT}`);
    });
});
