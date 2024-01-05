import express from "express";
import getTypesHandler from "../handlers/typeHandlers.js";

const router = express.Router();

router.get("/", getTypesHandler);

export default router;
