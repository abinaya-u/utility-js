const head = require("./head");
const tail = require("./tail");
const reduce = (array, functionName, value) => {
	while (array.length > 0) {
		value = value ? functionName(value, head(array)) : head(array);
		array = tail(array);
	}

	return value;
};

module.exports = reduce;
