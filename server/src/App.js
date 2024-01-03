import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";

const server = express();

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use("/", routes);

server.use((error, req, res, next) => {

    console.error(error.stack);
    res.status(500).json({ error: error.message });

});

server.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

export default server;