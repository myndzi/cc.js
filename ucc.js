// I don't know about your fancy loaders. This should work in browser and node.
(function (g) {
	// http://www.regular-expressions.info/creditcard.html -- thanks!
	var valid = new RegExp('^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$');

	g['uccjs'] = function (card) { card = ''+card; return valid.test(card) && luhnChk(card); };
	
	// https://gist.github.com/ShirtlessKirk/2134376 -- thanks!
	function luhnChk(luhn) {
		var len = luhn.length,
			mul = 0,
			prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]],
			sum = 0;
	 
		while (len--) {
			sum += prodArr[mul][parseInt(luhn.charAt(len), 10)];
			mul ^= 1;
		}
	 
		return sum % 10 === 0 && sum > 0;
	};
	
})(typeof module === 'undefined' ? window : module['exports']);
