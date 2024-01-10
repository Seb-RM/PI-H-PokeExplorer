
const isValidName = (text) => {
  const symbolRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
  return symbolRegex.test(text);
};

const isValidUrl = (url) => {
  return url.startsWith("http://") || url.startsWith("https://");
};

const validateForm = (name, value) => {

  const fieldErrors = { }; 

  switch (name) {
    case "nombre":
      if (value.trim().length === 0) {
        fieldErrors.message = "Por favor indica el nombre de tu Pokemon.";
        fieldErrors.tipo = "default";
        fieldErrors.icon = "default";
      } else if (value.trim() && isValidName(value)) {
        fieldErrors.message = "No puedes usar símbolos para el nombre.";
        fieldErrors.tipo = "error";
        fieldErrors.icon = "error";
      } else if (value.trim() && value.length > 15) {
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
      if (value.trim().length === 0) {
        fieldErrors.message = "Ingresa la URL (la dirección) de tu imagen";
        fieldErrors.tipo = "default";
        fieldErrors.icon = "default";
      } else if (value.trim() && !isValidUrl(value)) {
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
      if (value.trim().length === 0) {
        fieldErrors.message = "Ingresa un valor que indique la vida de tu Pokemon.",
        fieldErrors.tipo = "default";
        fieldErrors.icon = "default";
      } else if (value <= 0) {
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
      if (value.trim().length === 0) {
        fieldErrors.message = "Ingresa un valor que indique el poder de ataque de tu Pokemon.",
        fieldErrors.tipo = "default";
        fieldErrors.icon = "default";
      } else if (value <= 0) {
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
      if (value.trim().length === 0) {
        fieldErrors.message = "Ingresa un valor que indique la capacidad de defensa de tu Pokemon.",
        fieldErrors.tipo = "default";
        fieldErrors.icon = "default";
      } else if (value <= 0) {
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
      if (value.trim().length === 0) {
        fieldErrors.message = "Ingresa un valor que indique la velocidad de tu Pokemon.",
        fieldErrors.tipo = "default";
        fieldErrors.icon = "default";
      } else if (value <= 0) {
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
      if (value.trim().length === 0) {
        fieldErrors.message = "Por favor ingresa la altura (en metros) de tu Pokemon.",
        fieldErrors.tipo = "default";
        fieldErrors.icon = "default";
      } else if (value <= 0) {
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
      if (value.trim().length === 0) {
        fieldErrors.message = "Por favor ingresa el peso (en kilogramos) de tu Pokemon.",
        fieldErrors.tipo = "default";
        fieldErrors.icon = "default";
      } else if (value <= 0) {
        fieldErrors.message = "Ingresa un valor que sea mayor a cero.";
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
