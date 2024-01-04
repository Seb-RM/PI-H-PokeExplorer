import axios from "axios";

const getPokemonsFromApi = async (url) => {
    try {
            let apiPokemons = [];
            
            while ( apiPokemons.length < 155) {
            const response = await axios.get(url);
            const results = response.data.results;
            apiPokemons = [...apiPokemons, ...results];

            url = response.data.next;
            }
            
            return apiPokemons;

    } catch (error) {
        console.error("Error al obtener los Pokemons de la Api:", error.message);
        throw error;
    }
}; 

const getPokemonDetails = async (url) => {
    try {
        const response = await axios.get(url);
    
        return {
            imagen: response.data.sprites.other["official-artwork"].front_default,
            vida: response.data.stats[0]["base_stat"],
            ataque: response.data.stats[1]["base_stat"],
            defensa: response.data.stats[2]["base_stat"],
            velocidad: response.data.stats[5]["base_stat"],
            altura: response.data.height,
            peso: response.data.weight,
            tipos: response.data.types.map((tipo)=> tipo.type.name)
        };

    } catch (error) {
        console.error("Error al obtener detalles del Pokémon:", error.message);
        throw error;
    }
};

export  {
    getPokemonsFromApi,
    getPokemonDetails
    };
