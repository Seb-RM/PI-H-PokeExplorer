/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import ErrorPage from "../ErrorPage/ErrorPage.jsx";
import LoadingCards from "../LoadingCards/LoadingCards.jsx";
import formatIdNumber from "../../utils/formatIdNumbers.js";
import capitalizeWords from "../../utils/capitalizeWords.js";
import formatNumberValue from "../../utils/formatNumberValues.js"
import { fetchPokemonDetails } from "../../redux/actions/pokemonsActions.js"

import "./PokemonDetail.css"

const PokemonDetail = (id) => {
    
    const dispatch = useDispatch();
    const { pokemonDetails, loading, error } = useSelector((state) => state.pokemonStates
    );

    useEffect(() => {
        dispatch(fetchPokemonDetails(id));
    }, [dispatch]);

    if (loading) {
        return <LoadingCards/>;
    }

    if (error) {
        return <ErrorPage/>
    }

    let formatedId = "";

    if(isNaN(pokemonDetails.id)){
        formatedId = "NaN"
    } else {
        formatedId = formatIdNumber(pokemonDetails.id);
    }

    const capitalizedName = capitalizeWords(pokemonDetails.nombre);
    const formatedSize = formatNumberValue(pokemonDetails.altura);
    const formatedWeigh = formatNumberValue(pokemonDetails.peso);

    return (
        <div className="detail-container">
            <div className="detail-image">
                <img
                src={pokemonDetails.imagen}
                alt="`${pokemonDetails.nombre}`"
                className="detail-image"
                />
            </div>
            <div className="detail-notes">
                <div className="detail-title">
                    <h2>{formatedId}</h2>
                    <h2>{capitalizedName}</h2>
                </div>
                <div className="detail-values">
                    <h4>
                        Vida: {pokemonDetails.vida}{" "}
                        <span className="detail-icon">
                        <img src="../public/assets/icons/life-icon.png" />
                        </span>
                    </h4>
                    <h4>
                        Ataque: {pokemonDetails.ataque}{" "}
                        <span className="detail-icon">
                        <img src="../src/assets/icons/attack-icon.png" />
                        </span>
                    </h4>
                    <h4>
                        Defensa: {pokemonDetails.defensa}{" "}
                        <span className="detail-icon">
                        <img src="../src/assets/icons/defense-icon.png" />
                        </span>
                    </h4>
                    <h4>
                        Velocidad: {pokemonDetails.velocidad}{" "}
                        <span className="detail-icon">
                        {" "}
                        <img src="../src/assets/icons/speed-icon.png" />
                        </span>
                    </h4>
                    <h4>Altura: {formatedSize} m.</h4>
                    <h4>Peso: {formatedWeigh} kg.</h4>
                </div>
                <div className="detail-types">
                    <h4>Tipo:</h4>
                    {pokemonDetails.tipos.map((tipo, index) => (
                        <h3 key={index} className={tipo}>
                        {tipo}
                        </h3>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;
