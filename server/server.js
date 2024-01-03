import "dotenv/config";
import server from "./src/App.js";


const { PORT } = process.env


server.listen( PORT, ()=> {
    console.log(`Servidor funcionando en puerto: ${PORT}`);
});