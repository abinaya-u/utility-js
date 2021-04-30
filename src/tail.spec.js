const tail = require("./tail");

describe("Tail function", () => {
	it("Tail should return [2,3] when an array containing [1,2,3] is passed", () => {
		expect(tail([1, 2, 3])).toEqual([2, 3]);
	});

	it("Head should return null when an empty array is passed", () => {
		expect(tail([])).toEqual([]);
	});
});
