cd var math = require('../math');

describe("A program that does basic arithmetic", function() {

	it("can add two numbers together", function() {
		expect(math.add(3,5)).toBe(8);
	});

	it("can subtract two numbers together", function() {
		expect(math.subtract(3,5)).toBe(-2);
	});

	it("can multiply two numbers together", function() {
		expect(math.multiply(3,5)).toBe(15);
	});

	it("can divide two numbers together", function() {
		expect(math.divide(10,5)).toBe(2);
	});

});