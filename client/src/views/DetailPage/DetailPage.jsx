import { Link, useParams } from "react-router-dom";
import PokemonDetail from "../../components/PokemonDetail/PokemonDetail.jsx";
import "./DetailPage.css"
const DetailPage = () => {
    const { id } = useParams();

    return (
        <div className="detail-page">
            <Link to="/home" className="comeBack-button">
                <button>Volver</button>
            </Link>
            <section>
                <PokemonDetail id={id} />
            </section>
            <div>{isNaN(id) ? <button className="delete-button">Eliminar Pokemon</button> : null}</div>
        </div>
    );
};

export default DetailPage;
