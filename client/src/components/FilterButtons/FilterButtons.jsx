import PropTypes from "prop-types";

const FilterButtons = ({ handleSort }) => {
    return (
      <div>
        <div>
          <label>Ordenar por nombre:</label>
          <select name="sortByName" id="sortByName" onChange={handleSort}>
            <option> -- </option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div>
          <label>Ordenar por Ataque:</label>
          <select name="sortByAttack" id="sortByAttack" onChange={handleSort}>
            <option> -- </option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
      </div>
    );
};

FilterButtons.propTypes = {
    handleSort: PropTypes.func.isRequired,
};

export default FilterButtons;
