import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./PokemonCard.css"

const PokemonCard = ({ id, nombre, imagen, tipos }) => {
    return (
        <>
            <Link to={`/detail/${id}`}>
                <div className="cardContainer">
                <h3>Esto es una card.</h3>
                <img src={imagen} alt="`${nombre}`" className="cardImage" />
                <h2>{nombre}</h2>
                <ul>
                    {tipos.map((tipo, index) => (
                    <li key={index}>{tipo}</li>
                    ))}
                </ul>
                </div>
            </Link>
        </>
    );
};

PokemonCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    tipos: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        nombre: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default PokemonCard;
