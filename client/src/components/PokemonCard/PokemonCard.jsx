import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./PokemonCard.css"

const PokemonCard = ({ id, nombre, imagen, tipos }) => {
    return (
        <>
            <div className="cardContainer">
            <Link to={`/detail/${id}`}>
            
                <img src={imagen} alt="`${nombre}`" className="cardImage" />
                <h3>{nombre}</h3>
                <ul className="cardTypes">
                {tipos.map((tipo, index) => (
                    <li key={index}>{tipo}</li>
                ))}
                </ul>
            </Link>
            </div>
        </>
    );
};

PokemonCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    tipos: PropTypes.array.isRequired,
};

export default PokemonCard;
