import CreationForm from "../../components/CreationForm/CreationForm.jsx"
import { Link } from "react-router-dom";
import "./PokemonFormPage.css"

const PokemonFormPage = () => {
    return (
        <div className="formPage-container">
            <div>
                <Link to="/home">
                    <button className="">Volver</button>
                </Link>
            </div>
            <CreationForm />
        </div>
    );
};

export default PokemonFormPage;