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

export default {
    combineStyles,
    calculateWidth,
}