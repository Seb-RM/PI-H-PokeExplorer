import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { fetchTypes } from "../../redux/actions/pokemonsActions";

import "./FilteringButtons.css";

const FilteringButtons = ({ handleFilter}) => {

  const dispatch = useDispatch();

  const { types, updatedList } = useSelector((state) => state.pokemonStates);

  useEffect(() => {
      dispatch(fetchTypes());
  }, [dispatch]);

  const [selectedOrigin, setSelectedOrigin] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const handleOptionChange = (event) => {
    const filterOrigin = event.target.getAttribute("name");

    if (filterOrigin === "filterByOrigin") {
      console.log(event.target.value)
      handleFilter(event.target.value);
      setSelectedOrigin(event.target.value);
      if (event.target.value === "all") {
        setSelectedType("all");
      }
    } else {
      handleFilter(event.target.value);
      setSelectedType(event.target.value);
      if (event.target.value === "all") {
        setSelectedOrigin("all");
      }
    }
  };

  return (
    <div className="filtering-container">
      <div className="by-origin">
        <label htmlFor="filterByOrigin">Filtrar por Origen:</label>
        <select
          name="filterByOrigin"
          id="filterByOrigin"
          onChange={handleOptionChange}
          value={selectedOrigin}>
          <option value="all" className="filter-options">
            Todos
          </option>
          <option
            value="database"
            disabled={
              updatedList.filter((pokemon) => isNaN(pokemon.id)).length === 0
            }
            className="filter-options">
            Base de Datos
          </option>
          <option
            value="api"
            disabled={
              updatedList.filter((pokemon) => !isNaN(pokemon.id)).length === 0
            }
            className="filter-options">
            API
          </option>
        </select>
      </div>
      <div className="by-type">
        <label htmlFor="filterByType">Filtrar por Tipo:</label>
        <select
          name="filterByType"
          id="filterByType"
          onChange={handleOptionChange}
          value={selectedType}>
          <option value="all"> Todos </option>
          {types.map((type) => (
            <option
              key={type.id}
              value={type.nombre}
              className="filter-options"
              disabled={
                updatedList.filter((pokemon) => {
                  return pokemon.tipos.includes(type.nombre);
                }).length === 0
              }>
              {type.nombre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

FilteringButtons.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilteringButtons;
