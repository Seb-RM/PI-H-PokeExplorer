
const validateTypes = (name, pokemonData) => {

const fieldErrors = {};

switch (name) {

    case "tipos":
        if (pokemonData.length === 0) {
        fieldErrors.message = "Por favor indica de que tipo es tu Pokemon.",
        fieldErrors.tipo = "default";
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

export default validateTypes;