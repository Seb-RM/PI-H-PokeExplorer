import { Link } from "react-router-dom";

const Navigation = () =>{
    return (
        <>
            <div>
                <Link to={"/pokemonForm"}>
                    <button>Crea tu Pokemon!!</button>
                </Link>
            </div>
        </>
    );
};

export default Navigation;