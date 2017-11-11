

function Tuple(first, second, third) {
	this._1 = first;
	this._2 = second;
	this._3 = third;
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

Tuple.prototype.toString = function() {
	return "(" + this._1 + ", " + this._2 + ", " + this._3 + ")"; 
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
	this.maxWordLen = 0;
	this.consonantMap = new Map();	
	this.independentVowelMap = new Map();
	this.dependentVowelMap = new Map();	
	
	this.init();
}

PaliScript.prototype.addLetter = function(key, deva, iast, isConsonant, isVowel, isDependentVowel) {
	this.letters.push(key);
	this.devaMap.set(key, deva);
	this.iastMap.set(key, iast);
	this.maxWordLen = Math.max(this.maxWordLen, key.length);
	this.consonantMap.set(key, isConsonant);
	this.independentVowelMap.set(key, isVowel);
	this.dependentVowelMap.set(key, isDependentVowel);
}

PaliScript.prototype.init = function() {
	this.addLetter("A"  , "\u0905", "a"     , false, true, false);
	this.addLetter("AA" , "\u0906", "\u0101", false, true, false);
	this.addLetter("I"  , "\u0907", "i"     , false, true, false);
	this.addLetter("EE" , "\u0908", "\u012B", false, true, false);
	this.addLetter("U"  , "\u0909", "u"     , false, true, false);
	this.addLetter("OO" , "\u090a", "\u016B", false, true, false);
	this.addLetter("E"  , "\u090f", "e"     , false, true, false);
	this.addLetter("O"  , "\u0913", "o"     , false, true, false);

	this.addLetter("k"  , "\u0915", "k"     , true, false, false);
	this.addLetter("kh" , "\u0916", "kh"    , true, false, false);
	this.addLetter("g"  , "\u0917", "g"     , true, false, false);
	this.addLetter("gh" , "\u0918", "gh"    , true, false, false);
	this.addLetter("nga", "\u0919", "\u1E45", true, false, false);

	this.addLetter("c"  , "\u091a", "c"     , true, false, false);
	this.addLetter("ch" , "\u091b", "ch"    , true, false, false);
	this.addLetter("j"  , "\u091c", "j"     , true, false, false);
	this.addLetter("jh" , "\u091d", "jh"    , true, false, false);
	this.addLetter("nya", "\u091e", "\u00F1", true, false, false);

	this.addLetter("tt" , "\u091f", "\u1E6D" , true, false, false);
	this.addLetter("tth", "\u0920", "\u1E6Dh", true, false, false);
	this.addLetter("dd" , "\u0921", "\u1E0D" , true, false, false);
	this.addLetter("ddh", "\u0922", "\u1E0Dh", true, false, false);
	this.addLetter("nna", "\u0923", "\u1E47" , true, false, false);

	this.addLetter("t"  , "\u0924", "t" , true, false, false);
	this.addLetter("th" , "\u0925", "th", true, false, false);
	this.addLetter("d"  , "\u0926", "d" , true, false, false);
	this.addLetter("dh" , "\u0927", "dh", true, false, false);
	this.addLetter("n"  , "\u0928", "n" , true, false, false);

	this.addLetter("p"  , "\u092a", "p" , true, false, false);
	this.addLetter("ph" , "\u092b", "ph", true, false, false);
	this.addLetter("b"  , "\u092c", "b" , true, false, false);
	this.addLetter("bh" , "\u092d", "bh", true, false, false);
	this.addLetter("m"  , "\u092e", "m" , true, false, false);

	this.addLetter("y"  , "\u092f", "y", true, false, false);
	this.addLetter("r"  , "\u0930", "r", true, false, false);
	this.addLetter("l"  , "\u0932", "l", true, false, false);
	this.addLetter("ll" , "\u0933", "\u1e37", true, false, false);
	this.addLetter("v"  , "\u0935", "v", true, false, false);

	this.addLetter("s"  , "\u0938", "s"     , true, false, false);
	this.addLetter("h"  , "\u0939", "h"     , true, false, false);

	this.addLetter("."  , "\u0902", "\u1E43", false, false, false);
	this.addLetter("a"  , "\u093e", "\u0101", false, false, true);
	this.addLetter("i"  , "\u093f", "i"     , false, false, true);
	this.addLetter("ee" , "\u0940", "\u012B", false, false, true);
	this.addLetter("u"  , "\u0941", "u"     , false, false, true);
	this.addLetter("oo" , "\u0942", "\u016B", false, false, true);
	this.addLetter("e"  , "\u0947", "e"     , false, false, true);
	this.addLetter("o"  , "\u094b", "o"     , false, false, true);
	this.addLetter(","  , "\u094d", ""      , false, false, false);
	
	this.addLetter("|"  , "\u0964", ".", false, false, false);
	this.addLetter("||" , "\u0965", ".", false, false, false);

	this.addLetter("0"  , "\u0966", "0", false, false, false);
	this.addLetter("1"  , "\u0967", "1", false, false, false);
	this.addLetter("2"  , "\u0968", "2", false, false, false);
	this.addLetter("3"  , "\u0969", "3", false, false, false);
	this.addLetter("4"  , "\u096a", "4", false, false, false);
	this.addLetter("5"  , "\u096b", "5", false, false, false);
	this.addLetter("6"  , "\u096c", "6", false, false, false);
	this.addLetter("7"  , "\u096d", "7", false, false, false);
	this.addLetter("8"  , "\u096e", "8", false, false, false);
	this.addLetter("9"  , "\u096f", "9", false, false, false);
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
			
			var si = pos;
			var ei = Math.min(si + object.maxWordLen, word.length - 1);
        
			for (var i = ei; i >= si; i--) {
				var w = word.substr(si, i - si + 1);
				var t = object.devaMap.get(w);
				if (t != null) {
					if (update == true) {
						pos = i + 1;
					}
					return new Tuple(w, t, object.iastMap.get(w));
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
					return new Tuple(prefix.first() + suffix.first(), prefix.second() + suffix.second(), prefix.third() + suffix.third());
				} else if (suffix != null && object.isHalanta(suffix.first())) {
					return prefix;
				} else if (object.isConsonant(prefix.first())) {
					return new Tuple(prefix.first(), prefix.second(), prefix.third() + "a"); // add suffix 'a' in iast
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
		var tokens = new Array();
		var inputWords = inputLine.split(" ");
		
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
