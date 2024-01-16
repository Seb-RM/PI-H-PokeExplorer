import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deletePokemon } from "../../redux/actions/pokemonsActions.js";
import PokemonDetail from "../../components/PokemonDetail/PokemonDetail.jsx";

import "./DetailPage.css"



const DetailPage = () => {
    const { id } = useParams();

        const dispatch = useDispatch();
        const deleteStatus = useSelector((state) => state.pokemonStates);

        const handleDelete = () => {
            dispatch(deletePokemon(id));
        };

        useEffect(() => {

        }, [deleteStatus]);

    return (
        <div className="detail-page">
            <Link to="/home" className="comeBack-button" reloadDocument>
                <button>Volver</button>
            </Link>
            <section>
                <PokemonDetail id={id} />
            </section>
            <div>
                {isNaN(id) ? (
                    <button className="delete-button" onClick={handleDelete}>
                    Eliminar Pokemon
                    </button>
                ) : null}
                {deleteStatus.deleting && (
                    <h3 className="delete-message">Eliminando Pokémon...</h3>
                )}
                {deleteStatus.success && (
                    <h3 className="delete-message">{deleteStatus.message}</h3>
                )}
                {deleteStatus.error && (
                    <h3 className="delete-message">
                    Error al eliminar el Pokémon: {deleteStatus.error}
                    </h3>
                )}
            </div>
        </div>
    );
};

export default DetailPage;
