import PokemonCards from "../../components/PokemonCards/PokemonCards.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";

const HomePage = () => {

    return (
        <div className="homeContainer">
            <h1> Esta es el home</h1>
            <header></header>
            <nav>
                <Navigation/> 
            </nav>
            <section>
                <PokemonCards/>
            </section>
        </div>
    );
};

export default HomePage;
