const max = require("./max")
describe("Max function", () => {
	it("should return maximum element in the array", () => {
		expect(max([1,2,3,4])).toEqual(4);
	});
    it("should return maximum element in the array", () => {
		expect(max([1])).toEqual(1);
	});
   
});
