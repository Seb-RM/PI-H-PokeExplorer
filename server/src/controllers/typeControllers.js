import axios from "axios";

import { Type } from "../models/index.js";


const getTypes = async (req, res) => {
    try {
        const existingTypes = await Type.findAll();
        
        if (existingTypes.length === 0) {
        
        const apiResponse = await axios.get(`https://pokeapi.co/api/v2/type`);
            
        const typesFromApi = apiResponse.data.results;
        const filteredTypes = typesFromApi.map((type)=> ({
            nombre: type.name
        }))

        await Type.bulkCreate(filteredTypes);

        return filteredTypes;
        
        } else {
            
        return existingTypes;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los tipos." });
    }
};

export default getTypes;
