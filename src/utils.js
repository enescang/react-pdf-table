const combineStyles = (main, override) => {
    let result = { ...main };
    let ov = { ...override };
    if (typeof override == "object") {
        Object.assign(result, ov);
    }
    return result;
}

const calculateWidth = (total=0, totalElements) => {
    let width = (100 - total) / totalElements;
    return width + "%";
}

/**
 * Sum of an array of numbers
 * @param {array} array
 * @returns {number} sum of the array
 */
const sumOfArray = (array) => {
    if (Array.isArray(array)) {
        return array.reduce((a, b) => a + b, 0);
    }
    return 0;
}

export default {
    combineStyles,
    calculateWidth,
    sumOfArray,
}