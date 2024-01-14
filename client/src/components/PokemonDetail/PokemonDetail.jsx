import { useDispatch, useSelector } from "react-redux";

import { fetchPokemonDetails } from "../../redux/actions/pokemonsActions.js"
import { useEffect } from "react";
import LoadingCards from "../LoadingCards/LoadingCards.jsx";

const PokemonDetail = (id) => {
    
    const dispatch = useDispatch();
    const { pokemonDetails, loading, error } = useSelector(
        (state) => state.pokemonStates
    );
        console.log(id);
    useEffect(() => {
        dispatch(fetchPokemonDetails(id));
    }, [dispatch, id]);

    if (loading) {
        return <LoadingCards/>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="detail-container">
            <div>
                <img src={pokemonDetails.imagen} alt="`${pokemonDetails.nombre}`" />
            </div>
            <div>
                <h2>{pokemonDetails.id}</h2>
                <h1>{pokemonDetails.nombre}</h1>
                <h4>{pokemonDetails.vida}</h4>
                <h4>{pokemonDetails.ataque}</h4>
                <h4>{pokemonDetails.defensa}</h4>
                <h4>Velocidad: {pokemonDetails.velocidad}</h4>
                <h4>Altura: {pokemonDetails.altura} m</h4>
                <h4>Peso: {pokemonDetails.peso} kg</h4>
                <div>
                    <h4>Tipo</h4>
                    {pokemonDetails.tipos.map((tipo, index) =>(
                        <h3 key={index}>{ tipo }</h3>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;
