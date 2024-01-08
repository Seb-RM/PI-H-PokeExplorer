import CreationForm from "../../components/CreationForm/CreationForm.jsx"
import { Link } from "react-router-dom";

const PokemonFormPage = () => {
    return (
        <>
            <div>
                <Link to="/home">
                    <button className="">Volver</button>
                </Link>
            </div>
            <h1>Esta es la Form Page</h1>
            <CreationForm />
        </>
    );
};

export default PokemonFormPage;