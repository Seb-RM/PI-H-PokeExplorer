import PokemonCards from "../../components/PokemonCards/PokemonCards.jsx"
const HomePage = () => {
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
