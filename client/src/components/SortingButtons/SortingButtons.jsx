import PropTypes from "prop-types";

import "./SortingButtons.css"

const SortingButtons = ({ handleSortByName, handleSortByAttack, sortingButtonClass }) => {
    return (
      <div className="sorting-container">
        <div className="by-name">
          <label htmlFor="sortByName">Ordenar por Nombre:</label>
          <div className="sorting-button-container">
            <button
              name="sortByName"
              value="asc"
              className={
                sortingButtonClass.sortNameAsc
                  ? sortingButtonClass.sortNameAsc
                  : "sorting-button"
              }
              onClick={() => handleSortByName("asc")}>
              Ascendente
            </button>
            <button
              name="sortByName"
              value="desc"
              className={
                sortingButtonClass.sortNameDesc
                  ? sortingButtonClass.sortNameDesc
                  : "sorting-button"
              }
              onClick={() => handleSortByName("desc")}>
              Descendente
            </button>
          </div>
        </div>
        <div className="by-attack">
          <label htmlFor="sortByAttack">Ordenar por Ataque:</label>
          <div className="sorting-button-container">
            <button
              name="sortByName"
              value="asc"
              className={
                sortingButtonClass.sortAttackAsc
                  ? sortingButtonClass.sortAttackAsc
                  : "sorting-button"
              }
              onClick={() => handleSortByAttack("asc")}>
              Ascendente
            </button>
            <button
              name="sortByName"
              value="desc"
              className={
                sortingButtonClass.sortAttackDesc
                  ? sortingButtonClass.sortAttackDesc
                  : "sorting-button"
              }
              onClick={() => handleSortByAttack("desc")}>
              Descendente
            </button>
          </div>
        </div>
      </div>
    );
};

SortingButtons.propTypes = {
  handleSortByName: PropTypes.func.isRequired,
  handleSortByAttack: PropTypes.func.isRequired,
  handleButtonClass: PropTypes.func.isRequired,
  sortingButtonClass: PropTypes.object.isRequired,
};

export default SortingButtons;
