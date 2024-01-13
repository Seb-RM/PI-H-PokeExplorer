import PropTypes from "prop-types";

const SortingButtons = ({ handleSort }) => {
    return (
      <div>
        <div>
          <label htmlFor="sortByName">Ordenar por Nombre:</label>
          <select name="sortByName" id="sortByName" onChange={handleSort}>
            <option value=""> -- </option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div>
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
