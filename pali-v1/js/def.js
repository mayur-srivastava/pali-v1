var GrammarCase = {
	Nominative:   "Nominative",
	Vocative:     "Vocative",
	Accusative:   "Accusative",
	Instrumental: "Instrumental",
	Ablative:     "Ablative",
	Dative:       "Dative",
	Genetive:     "Genetive",
	Locative:     "Locative"
};

var GrammarGender = {
	Masculine: "Masculine",
	Feminine: "Feminine",
	Neuter: "Neuter"
};

var GrammarNumber = {
	Singular: 1,
	Plural: 2
};

var NounEnding = {
	"a": "A",
	"aa": "AA",
	"ar": "Ar,",
	"ee": "EE",
	"i": "I",
	"oo": "OO",
	"u": "U"
};

var NounEndingLen = {
	"a": 0,
	"aa": 1,
	"ar": 2,
	"ee": 2,
	"i": 1,
	"oo": 2,
	"u": 1,
}

var NounEndings = {};
NounEndings[GrammarGender.Masculine] = ["a", "i", "ee", "u", "oo", "ar"];
NounEndings[GrammarGender.Feminine] = ["aa", "i", "ee", "u", "ar"];
NounEndings[GrammarGender.Neuter] = ["a", "i", "u"];

var NounSuffixToAdd = {
	a:       "",
	araa:    "ra",
	araanam: "ran.",
	aram:    "r.",
	arehi:   "rehi",
	aresu:   "resu",
	ari:     "ri",
	aro:     "ro",
	avo:     "vo",
	ayo:     "yo",
	aa:      "a",
	aabhi:   "abhi",
	aahi:    "ahi",
	aanam:   "an.",
	aani:    "ani",
	aaraa:   "ara",
	aaram:   "ar.",
	aaraanam:"aran.",
	aarehi:  "arehi",
	aaresu:  "aresu",
	aaro:    "aro",
	aaya:    "ay",
	aayam:   "ay.",
	aayo:    "ayo",
	aasu:    "asu",
	e:       "e",
	ee:      "ee",
	eebhi:   "eebhi",
	eehi:    "eehi",
	eenam:   "een.",
	eeni:    "eeni",
	eesu:    "eesu",
	ebhi:    "ebhi",
	ehi:     "ehi",
	ena:     "en",
	esu:     "esu",
	i:       "i",
	im:      "i.",
	imhaa:   "im,ha",
	imhi:    "im,hi",
	inaa:    "ina",
	inam:    "in.",
	ini:     "ini",
	ino:     "ino",
	ismaa:   "is,ma",
	ismim:   "is,mi.",
	issa:    "is,s",
	iyaa:    "iya",
	iyam:    "iy.",
	iyo:     "iyo",
	m:       ".",
	mhaa:    "m,ha",
	mhi:     "m,hi",
	o:       "o",
	oo:      "oo",
	oobhi:   "oobhi",
	oohi:    "oohi",
	oonam:   "oon.",
	ooni:    "ooni",
	oosu:    "oosu",
	smaa:    "s,ma",
	smim:    "s,mi.",
	ssa:     "s,s",
	u:       "u",
	um:      "u.",
	umhi:    "um,hi",
	unaa:    "una",
	uno:     "uno",
	usmim:   "us,mi.",
	ussa:    "us,s",
	uyaa:    "uya",
	uyam:    "uy.",
	uyo:     "uyo",
};

var RelationshipNouns = new Set();
RelationshipNouns.add("pitr,");
RelationshipNouns.add("bhatr,");
RelationshipNouns.add("matr,");
RelationshipNouns.add("dheetr,");
RelationshipNouns.add("duhitr,");

function getGrammarCaseSuffixWord(grammarCase) {
	if (grammarCase == GrammarCase.Instrumental) {
		return "sh";
	}
}

var Tense = {
	Present: "Present"
}

var Voice = {
	Active: "Active"
}
var Person = {
	Third: "Third",
	Second: "Second",
	First: "First"
}

var VerbSuffixes = ["a", "e", "aya", "nnaa", "na", "nnaha"];

var VerbSuffix = {
	"a": "A",
	"e": "E",
	"aya": "Ay",
	"nnaa": "nnaa",
	"na": "na",
	"nnaha": "nna,ha",
	"o": "O"
};

var VerbSuffixToAppend = {
	"a": "",
	"e": "e",
	"aya": "y",
	"nnaa": "nna",
	"na": "n",
	"nnaha": "nna,h",
	"o": "o"
}

var VerbEndingToAdd = {
	ti:    "ti",
	nti:   "n,ti",
	si:    "si",
	tha:   "th",
	aami:  "ami",
	aama:  "am",
	mi:    "mi",
	ma:    "m",
	aati:  "ati",
	anti:  "n,ti",
	aasi:  "asi",
	aatha: "ath"
}
