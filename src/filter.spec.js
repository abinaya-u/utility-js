const filter = require("./filter");
const isUpperCase = require("./isUpperCase");
describe("Filter function", () => {
	it("should return empty array", () => {
		expect(filter([], (x) => true)).toEqual([]);
	});
	it("should return [1,2,3] when filter([1,2,3],x=>true) is passed ", () => {
		expect(filter([1, 2, 3], (x) => true)).toEqual([1, 2, 3]);
	});
	it("should return [] when filter([1,2,3],x=>false) is passed ", () => {
		expect(filter([1, 2, 3], (x) => false)).toEqual([]);
	});
	it("should return [2,3] when filter([1,2,3],x=>x>1) is passed ", () => {
		expect(filter([1, 2, 3], (x) => x > 1)).toEqual([2, 3]);
	});
	it("should return [B','D'] when filter(['a','B','c','D'],filterUpperCase) is passed ", () => {
		expect(filter(["a", "B", "c", "D"], isUpperCase)).toEqual(["B", "D"]);
	});
});
