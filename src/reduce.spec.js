const reduce = require("./reduce");
describe("Filter function", () => {
	it("should return undefined when [],(x,y)=>x+y is passed", () => {
		expect(reduce([], (x, y) => x + y)).toEqual(undefined);
	});
	it("should return 10 when [],v(x,y)=>x+y,10 is passed", () => {
		expect(reduce([], (x, y) => x + y, 10)).toEqual(10);
	});
	it("should return 10 when [],v(x,y)=>x+y,10 is passed", () => {
		expect(reduce(["a", "b", "c"], (x, y) => x + y)).toEqual("abc");
	});
	it("should return 10 when [],v(x,y)=>x+y,10 is passed", () => {
		expect(reduce(["a", "b", "c"], (x, y) => x + y, "z")).toEqual("zabc");
	});
});
