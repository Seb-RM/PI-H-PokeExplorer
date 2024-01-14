import PropTypes from "prop-types";
import "./SortingButtons.css"

const SortingButtons = ({ handleSort }) => {
    return (
      <div className="sorting-container">
        <div className="by-name">
          <label htmlFor="sortByName">Ordenar por Nombre:</label>
          <select name="sortByName" id="sortByName" onChange={handleSort}>
            <option value=""> -- </option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div className="by-attack">
          <label htmlFor="sortByAttack">Ordenar por Ataque:</label>
          <select name="sortByAttack" id="sortByAttack" onChange={handleSort}>
            <option value=""> -- </option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
      </div>
    );
};

SortingButtons.propTypes = {
    handleSort: PropTypes.func.isRequired,
};

export default SortingButtons;
