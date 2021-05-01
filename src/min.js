const min = (array) => {
	let minimum = array[0];
	for (let element of array) {
		minimum = minimum > element ? element : minimum;
	}
	return minimum;
};

module.exports = min;
