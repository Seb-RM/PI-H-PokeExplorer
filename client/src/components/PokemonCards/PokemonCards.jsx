import PokemonCard from "../PokemonCard/PokemonCard.jsx"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPokemons } from "../../redux/actions/pokemonsActions.js";

const PokemonCards = () => {

    const dispatch = useDispatch();

    const { pokemonsList, loading, error } = useSelector((state) => {
        return state.pokemonStates;
    });
    
    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

    if (loading) {
    return <p>Cargando...</p>;
    }

    if (error) {
    return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Esto es la sección Pokemon Cards</h1>
            <div>
            {pokemonsList.map((pokemon, index) => (
                <PokemonCard 
                    key={index}
                    id={pokemon.id}
                    nombre={pokemon.nombre}
                    imagen={pokemon.imagen}
                    tipos={pokemon.tipos}
                />
            ))}
            ;
            </div>
        </div>
    );
};

export default PokemonCards;
