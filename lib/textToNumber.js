var small = {
		'zero': 0,
		'one': 1,
		'two': 2,
		'three': 3,
		'four': 4,
		'five': 5,
		'six': 6,
		'seven': 7,
		'eight': 8,
		'nine': 9,
		'ten': 10,
		'eleven': 11,
		'twelve': 12,
		'thirteen': 13,
		'fourteen': 14,
		'fifteen': 15,
		'sixteen': 16,
		'seventeen': 17,
		'eighteen': 18,
		'nineteen': 19,
		'twenty': 20,
		'thirty': 30,
		'forty': 40,
		'fifty': 50,
		'sixty': 60,
		'seventy': 70,
		'eighty': 80,
		'ninety': 90
	},
	magnitude = {
		'thousand': 1000,
		'million': 1000000,
		'billion': 1000000000,
		'trillion': 1000000000000,
		'quadrillion': 1000000000000000,
		'quintillion': 1000000000000000000,
		'sextillion': 1000000000000000000000,
		'septillion': 1000000000000000000000000,
		'octillion': 1000000000000000000000000000,
		'nonillion': 1000000000000000000000000000000,
		'decillion': 1000000000000000000000000000000000,
	};

function textToNumber(s) {
	var parts = s.toString().split(/[\s-]+/),
		n = 0,
		g = 0;

	parts.forEach(function (w) {
		var x = small[w];

		if (w.match(/^\s*[\d\.]+\s*$/)) {
			g = g + parseFloat(w, 10);
		} else if (x != null) {
			g = g + x;
		} else if (w == "hundred") {
			g = g * 100;
		} else {
			x = magnitude[w];
			if (x != null) {
				n = n + g * x
				g = 0;
			} else { 
				// console.log('Unknown number: ' + w); 
			}
		}
	});
	
	return n + g;
}

module.exports = textToNumber;