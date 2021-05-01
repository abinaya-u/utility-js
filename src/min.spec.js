const min = require("./min");
describe("Max function", () => {
	it("should return minimum element in the array", () => {
		expect(min([1, 2, 3, 4])).toEqual(1);
	});
	it("should return minimum element in the array even if array contains single element", () => {
		expect(min([1])).toEqual(1);
	});
	it("should return undefined if array contains no element", () => {
		expect(min([])).toEqual(undefined);
	});
});
