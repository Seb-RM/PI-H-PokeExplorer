
const  capitalizeWords = (inputString) => {
    return inputString
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default capitalizeWords;