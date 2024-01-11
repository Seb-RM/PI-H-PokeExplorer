
const isValidName = (text) => {
  const symbolRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
  return symbolRegex.test(text);
};

const isValidUrl = (url) => {
  return url.startsWith("http://") || url.startsWith("https://");
};

const validateForm = (name, pokemonData) => {

  console.log("validation:"+pokemonData);

  const fieldErrors = { }; 

  switch (name) {
    case "nombre":
      if (pokemonData.trim().length === 0) {
        fieldErrors.message = "Por favor indica el nombre de tu Pokemon.";
        fieldErrors.tipo = "default";
        fieldErrors.icon = "default";
      } else if (pokemonData.trim() && isValidName(pokemonData)) {
        fieldErrors.message = "No puedes usar símbolos para el nombre.";
        fieldErrors.tipo = "error";
        fieldErrors.icon = "error";
      } else if (pokemonData.trim() && pokemonData.length > 15) {
        fieldErrors.message = "No puedes ingresar más de 15 caracteres.";
        fieldErrors.tipo = "error";
        fieldErrors.icon = "error";
      } else {
        fieldErrors.message = "Todo parece correcto,";
        fieldErrors.tipo = "success";
        fieldErrors.icon = "success";
      }
      break;

    case "imagen":
      if (pokemonData.trim().length === 0) {
        fieldErrors.message = "Ingresa la URL (la dirección) de tu imagen";
        fieldErrors.tipo = "default";
        fieldErrors.icon = "default";
      } else if (pokemonData.trim() && !isValidUrl(pokemonData)) {
        fieldErrors.message = "Ingresa una URL válida para la imagen.";
        fieldErrors.tipo = "error";
        fieldErrors.icon = "error";
      } else {
        fieldErrors.message = "Todo parece correcto,";
        fieldErrors.tipo = "success";
        fieldErrors.icon = "success";
      }
      break;

    case "vida":
      if (pokemonData.trim().length === 0) {
        (fieldErrors.message =
          "Ingresa un valor que indique la vida de tu Pokemon."),
          (fieldErrors.tipo = "default");
        fieldErrors.icon = "default";
      } else if (pokemonData <= 0) {
        fieldErrors.message = "Ingresa un valor que sea mayor a cero.";
        fieldErrors.tipo = "error";
        fieldErrors.icon = "error";
      } else {
        fieldErrors.message = "Todo parece correcto,";
        fieldErrors.tipo = "success";
        fieldErrors.icon = "success";
      }
      break;

    case "ataque":
      if (pokemonData.trim().length === 0) {
        (fieldErrors.message =
          "Ingresa un valor que indique el poder de ataque de tu Pokemon."),
          (fieldErrors.tipo = "default");
        fieldErrors.icon = "default";
      } else if (pokemonData <= 0) {
        fieldErrors.message = "Ingresa un valor que sea mayor a cero.";
        fieldErrors.tipo = "error";
        fieldErrors.icon = "error";
      } else {
        fieldErrors.message = "Todo parece correcto,";
        fieldErrors.tipo = "success";
        fieldErrors.icon = "success";
      }
      break;

    case "defensa":
      if (pokemonData.trim().length === 0) {
        (fieldErrors.message =
          "Ingresa un valor que indique la capacidad de defensa de tu Pokemon."),
          (fieldErrors.tipo = "default");
        fieldErrors.icon = "default";
      } else if (pokemonData <= 0) {
        fieldErrors.message = "Ingresa un valor que sea mayor a cero.";
        fieldErrors.tipo = "error";
        fieldErrors.icon = "error";
      } else {
        fieldErrors.message = "Todo parece correcto,";
        fieldErrors.tipo = "success";
        fieldErrors.icon = "success";
      }
      break;

    case "velocidad":
      if (pokemonData.trim().length === 0) {
        (fieldErrors.message =
          "Ingresa un valor que indique la velocidad de tu Pokemon."),
          (fieldErrors.tipo = "default");
        fieldErrors.icon = "default";
      } else if (pokemonData <= 0) {
        fieldErrors.message = "Ingresa un valor que sea mayor a cero.";
        fieldErrors.tipo = "error";
        fieldErrors.icon = "error";
      } else {
        fieldErrors.message = "Todo parece correcto,";
        fieldErrors.tipo = "success";
        fieldErrors.icon = "success";
      }
      break;

    case "altura":
      if (pokemonData.trim().length === 0) {
        (fieldErrors.message =
          "Por favor ingresa la altura (en metros) de tu Pokemon."),
          (fieldErrors.tipo = "default");
        fieldErrors.icon = "default";
      } else if (pokemonData <= 0) {
        fieldErrors.message = "Ingresa un valor que sea mayor a cero.";
        fieldErrors.tipo = "error";
        fieldErrors.icon = "error";
      } else {
        fieldErrors.message = "Todo parece correcto,";
        fieldErrors.tipo = "success";
        fieldErrors.icon = "success";
      }
      break;

    case "peso":
      if (pokemonData.trim().length === 0) {
        (fieldErrors.message =
          "Por favor ingresa el peso (en kilogramos) de tu Pokemon."),
          (fieldErrors.tipo = "default");
        fieldErrors.icon = "default";
      } else if (pokemonData <= 0) {
        fieldErrors.message = "Ingresa un valor que sea mayor a cero.";
        fieldErrors.tipo = "error";
        fieldErrors.icon = "error";
      } else {
        fieldErrors.message = "Todo parece correcto,";
        fieldErrors.tipo = "success";
        fieldErrors.icon = "success";
      }
      break;

    case "tipos":
      if (pokemonData.length === 0) {
        (fieldErrors.message = "Por favor indica de que tipo es tu Pokemon."),
          (fieldErrors.tipo = "default");
        fieldErrors.icon = "default";
      } else if (pokemonData.length > 2) {
        fieldErrors.message = "No puedes indicar mas de 2 tipos distintos.";
        fieldErrors.tipo = "error";
        fieldErrors.icon = "error";
      } else {
        fieldErrors.message = "Todo parece correcto,";
        fieldErrors.tipo = "success";
        fieldErrors.icon = "success";
      }
      break;

    default:
      break;
  }

  return fieldErrors;
};

export default validateForm;
