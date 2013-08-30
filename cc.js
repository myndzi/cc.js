// I don't know about your fancy loaders. This should work in browser and node.
(function (g) {
	// http://www.regular-expressions.info/creditcard.html -- thanks!
	var cardTypes = [ // just comment out any you don't want
		['Visa', '4[0-9]{12}(?:[0-9]{3})?'],
		['MasterCard', '5[1-5][0-9]{14}'],
		['American Express', '3[47][0-9]{13}'],
		['Diners Club', '3(?:0[0-5]|[68][0-9])[0-9]{11}'],
		['Discover', '6(?:011|5[0-9]{2})[0-9]{12}'],
		['JCB', '(?:2131|1800|35\d{3})\d{11}']
	];
	
	var i = -1, x = cardTypes.length, cardRegExps = { };
	while (++i < x) { cardRegExps[ cardTypes[i][0] ] = new RegExp( '^'+cardTypes[i][1]+'$' ); }
	var valid = new RegExp('^'+cardTypes.map(function (a) { return a[1]; }).join('|')+'$');
	
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
	
	g.ccjs = {
		validate: function (card) { card = ''+card; return valid.test(card) && luhnChk(card); },
		type: function (card) {
			card = ''+card;
			for (i in cardRegExps) { if (cardRegExps[i].test(card)) return i; }
			return 'Unknown';
		}
	};
})(typeof module === 'undefined' ? window : module['exports']);
