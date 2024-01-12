import PokemonCards from "../../components/PokemonCards/PokemonCards.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import { useDispatch } from "react-redux";
import { sortPokemonsByName, sortPokemonsByAttack } from "../../redux/actions/pokemonsActions.js";


const HomePage = () => {

    const dispatch = useDispatch();

    const handleSort = (event) => {
        console.log(event.target.getAttribute("name"));
        const sortName = event.target.getAttribute("name");

        if (sortName === "sortByName") {
            dispatch(sortPokemonsByName(event.target.value));
        } else {
            dispatch(sortPokemonsByAttack(event.target.value));
        }
    };

    return (
        <div className="homeContainer">
            <header></header>
            <nav>
                <Navigation handleSort={handleSort}/> 
            </nav>
            <section>
                <PokemonCards/>
            </section>
        </div>
    );
};

export default HomePage;
