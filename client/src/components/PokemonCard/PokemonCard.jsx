import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import capitalizeWords from "../../utils/capitalizeWords.js"

import "./PokemonCard.css";

const PokemonCard = ({ id, nombre, imagen, tipos }) => {

    const  capitalizedName = capitalizeWords(nombre);
    
    return (
        <>
            <div className="cardContainer">
                <Link
                    to={`/detail/${id}`}
                    style={{ textDecoration: "none" }}
                    reloadDocument>
                    <img src={imagen} alt="`${nombre}`" className="cardImage" />
                    <h3 className="card-name">{capitalizedName}</h3>
                    <ul className="cardTypes">
                    {tipos.map((tipo, index) => (
                        <li key={index} className={tipo}>
                        {tipo}
                        </li>
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
