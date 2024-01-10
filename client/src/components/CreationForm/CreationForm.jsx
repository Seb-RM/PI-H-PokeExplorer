/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { fetchTypes } from "../../redux/actions/pokemonsActions.js";
import { useEffect, useState } from "react";
import validateForm from "../../utils/validateForm.js";
import { INITIAL_ERRORS } from "../../constants/formConstants.js";
import validateTypes from "../../utils/validateTypes.js";

import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

const initialPokemonData = {
  nombre: "",
  imagen: "",
  vida: "",
  ataque: "",
  defensa: "",
  velocidad: "",
  altura: "",
  peso: "",
  tipos: [],
};

const CreationForm = () => {

  const dispatch = useDispatch();

  const { types } = useSelector((state) => state.pokemonStates);

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  // const [formSubmitted, setFormSubmitted] = useState(false);
  const [pokemonData, setPokemonData] = useState(initialPokemonData);
  const [errors, setErrors] = useState(INITIAL_ERRORS);

  const validateAndSetErrors = (name, value) => {
      let validationFunction;

      switch (name) {
        case "tipos":
          validationFunction = validateTypes;
          break;
        default:
          validationFunction = validateForm;
          break;
      }

      if (validationFunction) {
        const { message, tipo, icon } = validationFunction(name, value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: { message, tipo, icon },
        }));
      }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    setPokemonData((prevPokemonData)=> {
      if (type === "checkbox") {
        return {
          ...prevPokemonData,
          tipos: checked
          ? [...prevPokemonData.tipos, value]
          : prevPokemonData.tipos.filter((tipo) => tipo !== value),
        };
      } else {
        return {
          ...prevPokemonData,
          [name]: value,
        };
      }
    });
    
    validateAndSetErrors(name, value);

  };
  
  useEffect(() => {
    validateAndSetErrors("tipos", pokemonData.tipos);
  }, [pokemonData.tipos]);

  return (
    <>
      <div>
        <div>
          <h1>Crea un nuevo Pokemon.</h1>
          <p>
            Ingresa los datos que pide el formulario, para agregar un nuevo
            pokemon a la lista.
          </p>
        </div>
        <form>
          <div>
            <label>
              <h4>Nombre :</h4>
            </label>
            <input
              type="text"
              name="nombre"
              value={pokemonData.nombre}
              onChange={handleInputChange}
            />
            {/* {errors.nombre.type === "default" && (
              <div>
                <img src={defaultIcon} alt="default icon" />
                <p className="default-message">{errors.nombre.message}</p>
              </div>
            )}
            {errors.nombre.type === "error" && (
              <div>
                <img src={errorIcon} alt="Error icon" />
                <p className="error-message">{errors.nombre.message}</p>
              </div>
            )}
            {errors.nombre.type === "success" && (
              <div>
                <img src={okIcon} alt="Ok icon" />
                <p className="success-message">{errors.nombre.message}</p>
              </div>
            )} */}
            <ErrorMessage errors={errors.nombre} />
          </div>
          <div>
            <label>
              <h4>Imagen :</h4>
            </label>
            <input
              type="url"
              name="imagen"
              value={pokemonData.imagen}
              onChange={handleInputChange}
            />
            <ErrorMessage errors={errors.imagen} />
          </div>
          <div>
            <label>
              <h4>Vida :</h4>
            </label>
            <input
              type="number"
              step="1"
              name="vida"
              value={pokemonData.vida}
              onChange={handleInputChange}
            />
            <ErrorMessage errors={errors.vida} />
          </div>
          <div>
            <label>
              <h4>Ataque :</h4>
            </label>
            <input
              type="number"
              step="1"
              name="ataque"
              value={pokemonData.ataque}
              onChange={handleInputChange}
            />
            <ErrorMessage errors={errors.ataque} />
          </div>
          <div>
            <label>
              <h4>Defensa :</h4>
            </label>
            <input
              type="number"
              step="1"
              name="defensa"
              value={pokemonData.defensa}
              onChange={handleInputChange}
            />
            <ErrorMessage errors={errors.defensa} />
          </div>
          <div>
            <label>
              <h4>Velocidad :</h4>
            </label>
            <input
              type="number"
              step="1"
              name="velocidad"
              value={pokemonData.velocidad}
              onChange={handleInputChange}
            />
            <ErrorMessage errors={errors.velocidad} />
          </div>
          <div>
            <label>
              <h4>Altura :</h4>
            </label>
            <input
              type="number"
              step="0.1"
              name="altura"
              value={pokemonData.altura}
              onChange={handleInputChange}
            />
            <ErrorMessage errors={errors.altura} />
          </div>
          <div>
            <label>
              <h4>Peso :</h4>
            </label>
            <input
              type="number"
              step="0.1"
              name="peso"
              value={pokemonData.peso}
              onChange={handleInputChange}
            />
            <ErrorMessage errors={errors.peso} />
          </div>
          <div>
            <label>
              <h4>Tipo :</h4>
            </label>
            <ErrorMessage errors={errors.tipos} />
            {types.map((type, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={type.id}
                  name="tipos"
                  value={type.nombre}
                  onChange={handleInputChange}
                />
                <label htmlFor={type.id}>{type.nombre}</label>
              </div>
            ))}
          </div>
          <button type="submit">Agregar Juego</button>
          {/* {formSubmitted && <p>¡Formulario enviado exitosamente!</p>} */}
        </form>
      </div>
    </>
  );
};

export default CreationForm;
