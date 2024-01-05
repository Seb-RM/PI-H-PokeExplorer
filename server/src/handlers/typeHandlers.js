import getTypes from "../controllers/typeControllers.js";

const getTypesHandler = async (req, res) => {
    try {
        const types = await getTypes();
        res.json(types);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

export default getTypesHandler;
