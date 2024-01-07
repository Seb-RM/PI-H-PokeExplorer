import PokemonCards from "../../components/PokemonCards/PokemonCards.jsx"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPokemons } from "../../redux/actions/pokemonsActions.js";
const HomePage = () => {

    const dispatch = useDispatch();

    const { pokemonsList, loading, error } = useSelector(
        (state) => {console.log("State:",state)
            return state.pokemonStates}
    );
    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

    console.log(pokemonsList)
    if (loading) {
    return <p>Cargando...</p>;
    }

    if (error) {
    return <p>Error: {error}</p>;
    }
    
    return (
        <div className="homeContainer">
            <h1> Esta es el home</h1>
            <section>
                <PokemonCards/>
            </section>
        </div>
    );
};

export default HomePage;
