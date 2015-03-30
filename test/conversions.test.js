var textToNumber = require('../index');

describe('General', function() {
	it('can perform simple conversions', function() {
		expect(textToNumber('one hundred')).toEqual(100);
		expect(textToNumber('two hundred')).toEqual(200);
		expect(textToNumber('two thousand in sixty seven')).toEqual(2067);
		expect(textToNumber('one million in two thousand in sixty seven')).toEqual(1002067);
		expect(textToNumber('two million in two thousand in sixty seven')).toEqual(2002067);
		expect(textToNumber('ten billion two thousand in sixty seven')).toEqual(10000002067);
	});
});