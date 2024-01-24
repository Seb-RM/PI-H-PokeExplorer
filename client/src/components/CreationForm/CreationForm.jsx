/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import validateForm from "../../utils/validateForm.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import { formatearAlturaPeso, formatearNombre } from "../../utils/formatData.js";
import { createPokemon, fetchTypes } from "../../redux/actions/pokemonsActions.js";
import { INITIAL_ERRORS, INITIAL_POKEMON_DATA } from "../../constants/formConstants.js";

import "./CreationForm.css";

const CreationForm = () => {
  
  const dispatch = useDispatch();

  const { types } = useSelector((state) => state.pokemonStates);
  const { serverMessage } = useSelector((state) => state.pokemonStates);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [pokemonData, setPokemonData] = useState(INITIAL_POKEMON_DATA);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(errors).every(
      (field) => field.tipo === "success"
    );
    setFormValid(isValid);
  }, [errors]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setPokemonData((prevPokemonData) => {
        const arrayTipos = checked
          ? [...prevPokemonData.tipos, value]
          : prevPokemonData.tipos.filter((tipo) => tipo !== value);

        return {
          ...prevPokemonData,
          tipos: arrayTipos,
        };
      });
    } else {
      setPokemonData((prevPokemonData) => {
        return {
          ...prevPokemonData,
          [name]: value,
        };
      });
    }
  };
  
  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      "nombre": validateForm("nombre", pokemonData.nombre),
    }));
  }, [pokemonData.nombre]);

  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      "imagen": validateForm("imagen", pokemonData.imagen),
    }));
  }, [pokemonData.imagen]);

  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      "vida": validateForm("vida", pokemonData.vida),
    }));
  }, [pokemonData.vida]);

  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      "ataque": validateForm("ataque", pokemonData.ataque),
    }));
  }, [pokemonData.ataque]);

  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      "defensa": validateForm("defensa", pokemonData.defensa),
    }));
  }, [pokemonData.defensa]);

  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      "velocidad": validateForm("velocidad", pokemonData.velocidad),
    }));
  }, [pokemonData.velocidad]);

  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      "altura": validateForm("altura", pokemonData.altura),
    }));
  }, [pokemonData.altura]);

  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      "peso": validateForm("peso", pokemonData.peso),
    }));
  }, [pokemonData.peso]);

  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      "tipos": validateForm("tipos", pokemonData.tipos),
    }));
  }, [pokemonData.tipos]);

  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      nombre: validateForm("nombre", pokemonData.nombre),
    }));
  }, [pokemonData.nombre]);

  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      nombre: validateForm("nombre", pokemonData.nombre),
    }));
  }, [pokemonData.nombre]);

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  const datosFormateados = {
    ...pokemonData,
    nombre: formatearNombre(pokemonData.nombre),
    altura: formatearAlturaPeso(pokemonData.altura),
    peso: formatearAlturaPeso(pokemonData.peso),
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(createPokemon(datosFormateados));

      setFormSubmitted(true);

      setTimeout(() => {
        setPokemonData(INITIAL_POKEMON_DATA);
        setErrors(INITIAL_ERRORS);
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      setErrors({ serverError: "Error al enviar el formulario." });
    }
  };

  return (
    <div className="form-container">
      <div className="form-title">
        <h1>Crea un nuevo Pokemon.</h1>
        <p>
          Ingresa los datos que pide el formulario, para agregar un nuevo
          pokemon a la lista.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="form-data">
        <div className="input-container">
          <div className="label-input">
            <label>
              <h4>Nombre :</h4>
            </label>
            <input
              type="text"
              name="nombre"
              value={pokemonData.nombre}
              onChange={handleInputChange}
            />
          </div>
          <ErrorMessage errors={errors.nombre} />
        </div>
        <div className="input-container">
          <div className="label-input">
            <label>
              <h4>Imagen :</h4>
            </label>
            <input
              type="url"
              name="imagen"
              value={pokemonData.imagen}
              onChange={handleInputChange}
            />
          </div>
          <ErrorMessage errors={errors.imagen} />
        </div>
        <div className="input-container">
          <div className="label-input">
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
          </div>
          <ErrorMessage errors={errors.vida} />
        </div>
        <div className="input-container">
          <div className="label-input">
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
          </div>
          <ErrorMessage errors={errors.ataque} />
        </div>
        <div className="input-container">
          <div className="label-input">
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
          </div>
          <ErrorMessage errors={errors.defensa} />
        </div>
        <div className="input-container">
          <div className="label-input">
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
          </div>
          <ErrorMessage errors={errors.velocidad} />
        </div>
        <div className="input-container">
          <div className="label-input">
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
          </div>
          <ErrorMessage errors={errors.altura} />
        </div>
        <div className="input-container">
          <div className="label-input">
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
          </div>
          <ErrorMessage errors={errors.peso} />
        </div>
        <div className="input-container">
          <div className="label-input">
            <label>
              <h4>Tipo :</h4>
            </label>
          </div>
          <ErrorMessage errors={errors.tipos} />
          <div className="check-boxes">
            {types.map((type, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={type.id}
                  name="tipos"
                  defaultChecked={checkedBox}
                  value={type.nombre}
                  onChange={handleInputChange}
                />
                <label htmlFor={type.id}>{type.nombre}</label>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" disabled={!isFormValid} className="submit-button">
          Crear Pokemon
        </button>
        {formSubmitted && <p className="server-message">{serverMessage}</p>}
      </form>
    </div>
  );
};

export default CreationForm;
