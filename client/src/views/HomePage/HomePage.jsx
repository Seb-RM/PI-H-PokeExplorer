import PokemonCards from "../../components/PokemonCards/PokemonCards.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import { useDispatch } from "react-redux";
import { sortPokemonsByName, sortPokemonsByAttack, filterPokemonsByOrigin, filterPokemonsByType } from "../../redux/actions/pokemonsActions.js";



const HomePage = () => {

    const dispatch = useDispatch();

    const handleSort = (event) => {
        const sortName = event.target.getAttribute("name");
        if (sortName === "sortByName") {
            dispatch(sortPokemonsByName(event.target.value));
        } else {
            dispatch(sortPokemonsByAttack(event.target.value));
        }
    };

    const handleFilter = (event) => {
      const filterOrigin = event.target.getAttribute("name");
      if (filterOrigin === "filterByOrigin") {
        dispatch(filterPokemonsByOrigin(event.target.value));
      } else {
            dispatch(filterPokemonsByType(event.target.value));
      }
    };

    return (
      <div className="homeContainer">
        <header></header>
        <nav>
          <Navigation handleSort={handleSort} handleFilter={handleFilter} />
        </nav>
        <section>
          <PokemonCards />
        </section>
      </div>
    );
};

export default HomePage;
