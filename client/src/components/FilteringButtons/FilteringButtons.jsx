import { useEffect } from "react";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { fetchTypes } from "../../redux/actions/pokemonsActions";

const FilteringButtons = ({ handleFilter}) => {

    const dispatch = useDispatch();
    const { types } = useSelector((state) => state.pokemonStates);

    useEffect(() => {
        dispatch(fetchTypes());
    }, [dispatch]);

    return (
      <div>
        <div>
          <label htmlFor="filterByOrigin">Filtrar por Origen:</label>
          <select
            name="filterByOrigin"
            id="filterByOrigin"
            onChange={handleFilter}>
            <option value="all"> Todos </option>
            <option value="database">Base de Datos</option>
            <option value="api">API</option>
          </select>
        </div>
        <div>
          <label htmlFor="filterByType">Filtrar por Tipo:</label>
          <select name="filterByType" id="filterByType" onChange={handleFilter}>
            <option value="all"> Todos </option>
            {types.map((type) => (
              <option key={type.id} value={type.nombre}>
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
