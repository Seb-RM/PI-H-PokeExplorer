import { Link } from "react-router-dom";
import FilterButtons from "../FilterButtons/FilterButtons";
import PropTypes from "prop-types";

const Navigation = ({ handleSort }) => {
    return (
        <div>
        <FilterButtons handleSort={handleSort} />
        <Link to={"/pokemonForm"}>
            <button>Crea tu Pokemon!!</button>
        </Link>
        </div>
    );
};

Navigation.propTypes = {
    handleSort: PropTypes.func.isRequired,
};

export default Navigation;