const tail = (array) => {
	if (array === null) return [];
	return array.slice(1);
};
module.exports = tail;
