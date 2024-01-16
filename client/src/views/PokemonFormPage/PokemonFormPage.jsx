import { Link } from "react-router-dom";

import CreationForm from "../../components/CreationForm/CreationForm.jsx"

import "./PokemonFormPage.css"

const PokemonFormPage = () => {
    return (
        <div className="formPage-container">
            <div>
                <Link to="/home" reloadDocument>
                    <button className="form-return-button">Volver</button>
                </Link>
            </div>
            <CreationForm />
        </div>
    );
};

export default PokemonFormPage;