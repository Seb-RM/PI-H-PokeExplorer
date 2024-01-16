import server from "./src/App.js";
import sequelize from "./src/DB_connection.js";

import "dotenv/config";

const { PORT } = process.env

sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log(`Servidor funcionando en puerto: ${PORT}`);
    });
});
