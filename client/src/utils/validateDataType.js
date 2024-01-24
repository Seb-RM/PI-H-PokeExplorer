const validateType = (value, expectedType) => {
    console.log(value)
    console.log(expectedType)
    console.log(typeof value)
    switch (expectedType) {
        case "string":
        return typeof value === "string";

        case "number":
            return typeof value === 'number' && !isNaN(value) && Number.isInteger(value);

        case "float":
        return typeof value === "number" && !isNaN(value);

        case "url":
        return typeof value === "string";

        default:
        return true;
    }
};

export default validateType;