const map = require("./map");
const cube = require("./cube");
const identity = require("./identity");
describe("Map function", () => {
	it("Map should return [] when an empty array is passed passed", () => {
		expect(map([], cube)).toEqual([]);
	});
	it("Map should return [1,8,27] when [1,2,3] is passed ", () => {
		expect(map([1, 2, 3], cube)).toEqual([1, 8, 27]);
	});
	it("Map should return [1,2,3] when [1,2,3] is passed ", () => {
		expect(map([1, 2, 3], identity)).toEqual([1, 2, 3]);
	});
	it("Map should return [11] when [{x:10}] is passed ", () => {
		expect(map([{ x: 10 }], (someObject) => someObject.x + 1)).toEqual([11]);
	});
});
