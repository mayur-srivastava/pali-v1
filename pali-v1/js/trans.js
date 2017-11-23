

function Tuple(first, second, third, fourth) {
	this._1 = first;
	this._2 = second;
	this._3 = third;
	this._4 = fourth;
}

Tuple.prototype.first = function() {
	return this._1;
}

Tuple.prototype.second = function() {
	return this._2;
}

Tuple.prototype.third = function() {
	return this._3;
}

Tuple.prototype.fourth = function() {
	return this._4;
}

Tuple.prototype.toString = function() {
	return "(" + this._1 + ", " + this._2 + ", " + this._3 + ", " + this._4 + ")"; 
}

var TokenKind = {
	Syllable: "Syllable",
	Space: "Space"
}

function Token(tokenKind, tuple) {
	this.tokenKind = tokenKind;
	this._tuple = tuple;
}

Token.prototype.getEnglish = function() {
	return this._tuple.first();
}

Token.prototype.getDeva = function() {
	return this._tuple.second();
}

Token.prototype.getIast = function() {
	return this._tuple.third();
}

Token.prototype.getBrahmi = function() {
	return this._tuple.fourth();
}

Token.prototype.isSpace = function() {
	return this.tokenKind == TokenKind.Space;
}

function createSpace() {
	return new Token(TokenKind.Space, null);
}

function createSyllable(tuple) {
	return new Token(TokenKind.Syllable, tuple);
}

function TokenCollection(tokens) {
	this.tokens = tokens;
}

TokenCollection.prototype.getDeva = function() {
	var result = "";
	for (var j = 0; j < this.tokens.length; j++) {
		var t = this.tokens[j];
		if (t.isSpace()) {
			result += " ";
		} else {
			result += t.getDeva();
		}
	}
	return result;
}

TokenCollection.prototype.getBrahmi = function() {
	var result = "";
	for (var j = 0; j < this.tokens.length; j++) {
		var t = this.tokens[j];
		if (t.isSpace()) {
			result += " ";
		} else {
			result += t.getBrahmi();
		}
	}
	return result;
}

TokenCollection.prototype.getIast = function() {
	var result = "";
	for (var j = 0; j < this.tokens.length; j++) {
		var t = this.tokens[j];
		if (t.isSpace()) {
			result += " ";
		} else {
			result += t.getIast();
		}
	}
	return result;
}

function PaliScript() {
	this.letters = [];
	this.devaMap = new Map();
	this.iastMap = new Map();
	this.brahmiMap = new Map();
	this.maxWordLen = 0;
	this.maxVowelLen = 0;
	this.consonantMap = new Map();	
	this.independentVowelMap = new Map();
	this.dependentVowelMap = new Map();	
	
	this.init();
}

PaliScript.prototype.addLetter = function(key, deva, iast, brahmi, isConsonant, isVowel, isDependentVowel) {
	this.letters.push(key);
	this.devaMap.set(key, deva);
	this.iastMap.set(key, iast);
	this.brahmiMap.set(key, brahmi);
	this.maxWordLen = Math.max(this.maxWordLen, key.length);
	this.consonantMap.set(key, isConsonant);
	this.dependentVowelMap.set(key, isDependentVowel);
	
	if (isVowel && !isDependentVowel) {
		this.independentVowelMap.set(key, isVowel);
		this.maxVowelLen = Math.max(this.maxVowelLen, key.length);
	}
}

PaliScript.prototype.init = function() {
	this.addLetter("A"  , "\u0905", "a"     , "\u{11005}", false, true, false);
	this.addLetter("AA" , "\u0906", "\u0101", "\u{11006}", false, true, false);
	this.addLetter("I"  , "\u0907", "i"     , "\u{11007}", false, true, false);
	this.addLetter("EE" , "\u0908", "\u012B", "\u{11008}", false, true, false);
	this.addLetter("U"  , "\u0909", "u"     , "\u{11009}", false, true, false);
	this.addLetter("OO" , "\u090a", "\u016B", "\u{1100A}", false, true, false);
	this.addLetter("E"  , "\u090f", "e"     , "\u{1100F}", false, true, false);
	this.addLetter("O"  , "\u0913", "o"     , "\u{11011}", false, true, false);

	this.addLetter("k"  , "\u0915", "k"     , "\u{11013}", true, false, false);
	this.addLetter("kh" , "\u0916", "kh"    , "\u{11014}", true, false, false);
	this.addLetter("g"  , "\u0917", "g"     , "\u{11015}", true, false, false);
	this.addLetter("gh" , "\u0918", "gh"    , "\u{11016}", true, false, false);
	this.addLetter("nga", "\u0919", "\u1E45", "\u{11017}", true, false, false);

	this.addLetter("c"  , "\u091a", "c"     , "\u{11018}", true, false, false);
	this.addLetter("ch" , "\u091b", "ch"    , "\u{11019}", true, false, false);
	this.addLetter("j"  , "\u091c", "j"     , "\u{1101A}", true, false, false);
	this.addLetter("jh" , "\u091d", "jh"    , "\u{1101B}", true, false, false);
	this.addLetter("nya", "\u091e", "\u00F1", "\u{1101C}", true, false, false);

	this.addLetter("tt" , "\u091f", "\u1E6D" , "\u{1101D}", true, false, false);
	this.addLetter("tth", "\u0920", "\u1E6Dh", "\u{1101E}", true, false, false);
	this.addLetter("dd" , "\u0921", "\u1E0D" , "\u{1101F}", true, false, false);
	this.addLetter("ddh", "\u0922", "\u1E0Dh", "\u{11020}", true, false, false);
	this.addLetter("nna", "\u0923", "\u1E47" , "\u{11021}", true, false, false);

	this.addLetter("t"  , "\u0924", "t" , "\u{11022}", true, false, false);
	this.addLetter("th" , "\u0925", "th", "\u{11023}", true, false, false);
	this.addLetter("d"  , "\u0926", "d" , "\u{11024}", true, false, false);
	this.addLetter("dh" , "\u0927", "dh", "\u{11025}", true, false, false);
	this.addLetter("n"  , "\u0928", "n" , "\u{11026}", true, false, false);

	this.addLetter("p"  , "\u092a", "p" , "\u{11027}", true, false, false);
	this.addLetter("ph" , "\u092b", "ph", "\u{11028}", true, false, false);
	this.addLetter("b"  , "\u092c", "b" , "\u{11029}", true, false, false);
	this.addLetter("bh" , "\u092d", "bh", "\u{1102A}", true, false, false);
	this.addLetter("m"  , "\u092e", "m" , "\u{1102B}", true, false, false);

	this.addLetter("y"  , "\u092f", "y", "\u{1102C}", true, false, false);
	this.addLetter("r"  , "\u0930", "r", "\u{1102D}", true, false, false);
	this.addLetter("l"  , "\u0932", "l", "\u{1102E}", true, false, false);
	this.addLetter("v"  , "\u0935", "v", "\u{1102F}", true, false, false);

	this.addLetter("s"  , "\u0938", "s", "\u{11032}", true, false, false);
	this.addLetter("h"  , "\u0939", "h", "\u{11033}", true, false, false);
	this.addLetter("ll" , "\u0933", "\u1e37", "\u{11034}", true, false, false);
	
	this.addLetter("."  , "\u0902", "\u1E43", "\u{11001}", false, false, false);
	this.addLetter("a"  , "\u093e", "\u0101", "\u{11038}", false, false, true);
	this.addLetter("i"  , "\u093f", "i"     , "\u{1103A}", false, false, true);
	this.addLetter("ee" , "\u0940", "\u012B", "\u{1103B}", false, false, true);
	this.addLetter("u"  , "\u0941", "u"     , "\u{1103C}", false, false, true);
	this.addLetter("oo" , "\u0942", "\u016B", "\u{1103D}", false, false, true);
	this.addLetter("e"  , "\u0947", "e"     , "\u{11042}", false, false, true);
	this.addLetter("o"  , "\u094b", "o"     , "\u{11044}", false, false, true);
	this.addLetter(","  , "\u094d", ""      , "\u{11046}", false, false, false);
	
	this.addLetter("|"  , "\u0964", ".", "\u{11047}", false, false, false);
	this.addLetter("||" , "\u0965", ".", "\u{11048}", false, false, false);

	this.addLetter("0"  , "\u0966", "0", "\u{11066}", false, false, false);
	this.addLetter("1"  , "\u0967", "1", "\u{11067}", false, false, false);
	this.addLetter("2"  , "\u0968", "2", "\u{11068}", false, false, false);
	this.addLetter("3"  , "\u0969", "3", "\u{11069}", false, false, false);
	this.addLetter("4"  , "\u096a", "4", "\u{1106A}", false, false, false);
	this.addLetter("5"  , "\u096b", "5", "\u{1106B}", false, false, false);
	this.addLetter("6"  , "\u096c", "6", "\u{1106C}", false, false, false);
	this.addLetter("7"  , "\u096d", "7", "\u{1106D}", false, false, false);
	this.addLetter("8"  , "\u096e", "8", "\u{1106E}", false, false, false);
	this.addLetter("9"  , "\u096f", "9", "\u{1106F}", false, false, false);
}

PaliScript.prototype.isHalanta = function(letter) {
	return letter == ",";
}

PaliScript.prototype.isDependentVowel = function(letter) {
	return this.dependentVowelMap.get(letter);
}

PaliScript.prototype.isConsonant = function(letter) {
	return this.consonantMap.get(letter);
}

PaliScript.prototype.translate = function(inputText) {
	var object = this;
	
	function getTokenizer(inputToken) {
		var word = inputToken, pos = 0;

		function matchMax(update) {
			if (pos >= word.length || word.length == 0) {
				return null;
			}
			
			if (pos == 0) {
				var vsi = pos;
				var vei = Math.min(vsi + object.maxVowelLen, word.length - 1);
		
				for (var i = vei; i >= vsi; i--) {
					var w = word.substr(vsi, i - vsi + 1).toUpperCase();
					var isVowel = object.independentVowelMap.get(w);
					var t = object.devaMap.get(w);
					
					if (isVowel && t != null) {
						if (update == true) {
							pos = i + 1;
						}
						return new Tuple(w, t, object.iastMap.get(w), object.brahmiMap.get(w));
					}
				}
			}
			
			var si = pos;
			var ei = Math.min(si + object.maxWordLen, word.length - 1);
        
			for (var i = ei; i >= si; i--) {
				var w = word.substr(si, i - si + 1);
				var t = object.devaMap.get(w);
				if (t != null) {
					if (update == true) {
						pos = i + 1;
					}
					return new Tuple(w, t, object.iastMap.get(w), object.brahmiMap.get(w));
				}
			}
			if (update) {
				pos = ei + 1;
			}
			return null;
		}

		var tokenize = function() {
			var prefix = matchMax(true);
			if (prefix != null) {
				var suffix = matchMax(false);
				if (suffix != null && object.isDependentVowel(suffix.first())) {
					matchMax(true); // Skip suffix
					return new Tuple(prefix.first() + suffix.first(), prefix.second() + suffix.second(), prefix.third() + suffix.third(), prefix.fourth() + suffix.fourth());
				} else if (suffix != null && object.isHalanta(suffix.first())) {
					return prefix;
				} else if (object.isConsonant(prefix.first())) {
					return new Tuple(prefix.first(), prefix.second(), prefix.third() + "a", prefix.fourth()); // add suffix 'a' in iast
				} else {
					return prefix;
				}
			} else {
				return null;
			}
		};
		return tokenize;
    }
	
	function getTokens(inputLine) {
		var inputLineLowerCase = inputLine.toLowerCase();
		
		var tokens = new Array();
		var inputWords = inputLineLowerCase.split(" ");
		
		for (var j = 0; j < inputWords.length; j++) {
			var inputWord = inputWords[j];

			var ctokens = inputWord.split("?");
			for (var i = 0; i < ctokens.length; i++) {
				var tokenize = getTokenizer(ctokens[i]);

				var token;
				while ((token = tokenize()) != null) {
					tokens.push(createSyllable(token));
				}
			}
			
			if (j < inputWords.length - 1) {
				tokens.push(createSpace());
			}
		}

		return tokens;
    }
	
	return new TokenCollection(getTokens(inputText));
}
