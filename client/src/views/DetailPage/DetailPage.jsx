import { Link, useParams } from "react-router-dom";
import PokemonDetail from "../../components/PokemonDetail/PokemonDetail.jsx";
import "./DetailPage.css"
const DetailPage = () => {
    const { id } = useParams();

    return (
    <div>
        <Link to="/home">
            <button>Volver</button>
        </Link>
        <section>
            <h1>Esto es sección Details</h1>
            <PokemonDetail id={ id }/>
        </section>
    </div>
    );
};

export default DetailPage;
