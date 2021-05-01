const isUpperCase = require("./isUpperCase");

const filter = (array, functionName) => {
	const result = [];
	for (let arrayValue of array) {
		if (functionName(arrayValue)) result.push(arrayValue);
	}
	return result;
};

module.exports = filter;
