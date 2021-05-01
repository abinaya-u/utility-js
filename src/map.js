const map = (array, functionName) => {
	const result = [];
	for (let arrayElement of array) {
		result.push(functionName(arrayElement));
	}
	return result;
};

module.exports = map;
