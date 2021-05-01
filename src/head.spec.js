const head = require("./head");

describe("Head function", () => {
	it("Head should return 1 when an array containing [1,2,3,4] is passed", () => {
		expect(head([1, 2, 3, 4])).toEqual(1);
	});

	it("Head should return null when an empty array is passed", () => {
		expect(head([])).toEqual(null);
	});
});
