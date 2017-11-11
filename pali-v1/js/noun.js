
function Noun(base, nounEnding, meanings, gender, otherEnding=null) {
	this.base = base;
	this.nounEnding = nounEnding;
	this.otherEnding = otherEnding;
	this.meanings = meanings;
	this.gender = gender;
}

Noun.prototype.getBase = function() {
	return this.base;
}

Noun.prototype.getRepr = function() {
	return this.base;
}

Noun.prototype.getOtherBase = function() {
	if (this.otherEnding == null) {
		return null;
	} else {
		return createNoun(this, this.otherEnding);
	}
}

Noun.prototype.toString = function() {
	return this.base;
}

Noun.prototype.isRelationshipNoun = function() {
	return RelationshipNouns.has(this.base);
}

Noun.prototype.getCase = function(grammarCase, grammarNumber) {
	if (this.gender == GrammarGender.Masculine) {
		return getMasculineNounCase(this, grammarCase, grammarNumber);
	} else if (this.gender == GrammarGender.Feminine) {
		return getFeminineNounCase(this, grammarCase, grammarNumber);
	} else if (this.gender == GrammarGender.Neuter) {
		return getNeuterNounCase(this, grammarCase, grammarNumber);
	}
	return null;
}

function createNoun(noun, suffixToAdd) {
	function removeSuffix(word, ending) {
		return word.substr(0, word.length - ending);
	}
	
	return removeSuffix(noun.base, NounEndingLen[noun.nounEnding]) + suffixToAdd;
}

function getMasculineNounCase(noun, grammarCase, grammarNumber) {
	if (noun.nounEnding == "a") {
		return getMasculineNounCaseEndingInA(noun, grammarCase, grammarNumber);
	} else if (noun.nounEnding == "i") {
		return getMasculineNounCaseEndingInI(noun, grammarCase, grammarNumber);
	} else if (noun.nounEnding == "ee") {
		return getMasculineNounCaseEndingInEE(noun, grammarCase, grammarNumber);
	} else if (noun.nounEnding == "oo") {
		return getMasculineNounCaseEndingInOO(noun, grammarCase, grammarNumber);
	} else if (noun.nounEnding == "u" && noun.otherEnding == null) {
		return getMasculineNounCaseEndingInU(noun, grammarCase, grammarNumber);
	} else if (noun.nounEnding == "u" && noun.otherEnding == "ar") {
		return getMasculineNounCaseEndingInU_AR(noun, grammarCase, grammarNumber);
	} else if (noun.nounEnding == "ar" && noun.otherEnding == "u") {
		return noun.isRelationshipNoun() 
			? getMasculineNounCaseEndingInAR_relationship(noun, grammarCase, grammarNumber) 
			: getMasculineNounCaseEndingInAR(noun, grammarCase, grammarNumber);
	} 
}

function getFeminineNounCase(noun, grammarCase, grammarNumber) {
	if (noun.nounEnding == "aa") {
		return getFeminineNounCaseEndingInAA(noun, grammarCase, grammarNumber);
	} else if (noun.nounEnding == "i") {
		return getFeminineNounCaseEndingInI(noun, grammarCase, grammarNumber);
	} else if (noun.nounEnding == "ee") {
		return getFeminineNounCaseEndingInEE(noun, grammarCase, grammarNumber);
	} else if (noun.nounEnding == "u") {
		return getFeminineNounCaseEndingInU(noun, grammarCase, grammarNumber);
	} else if (noun.nounEnding == "ar" && noun.otherEnding == "u") {
		return noun.isRelationshipNoun() 
			? getFeminineNounCaseEndingInAR_relationship(noun, grammarCase, grammarNumber) 
			: null; // don't know any words ending with -ar that are not for relationship.
	}
}

function getNeuterNounCase(noun, grammarCase, grammarNumber) {
	if (noun.nounEnding == "a") {
		return getNeuterNounCaseEndingInA(noun, grammarCase, grammarNumber);
	} else if (noun.nounEnding == "i") {
		return getNeuterNounCaseEndingInI(noun, grammarCase, grammarNumber);
	} else if (noun.nounEnding == "u") {
		return getNeuterNounCaseEndingInU(noun, grammarCase, grammarNumber);
	}
}

function getMasculineNounCaseEndingInA(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.o)] 
			: [createNoun(noun, NounSuffixToAdd.aa)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.a)] 
			: [createNoun(noun, NounSuffixToAdd.aa)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.m)] 
			: [createNoun(noun, NounSuffixToAdd.e)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.ena)] 
			: [createNoun(noun, NounSuffixToAdd.ehi), createNoun(noun, NounSuffixToAdd.ebhi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aa), createNoun(noun, NounSuffixToAdd.mhaa), createNoun(noun, NounSuffixToAdd.smaa)] 
			: [createNoun(noun, NounSuffixToAdd.ehi), createNoun(noun, NounSuffixToAdd.ebhi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aaya), createNoun(noun, NounSuffixToAdd.ssa)] 
			: [createNoun(noun, NounSuffixToAdd.aanam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.ssa)] 
			: [createNoun(noun, NounSuffixToAdd.aanam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.e), createNoun(noun, NounSuffixToAdd.mhi), createNoun(noun, NounSuffixToAdd.smim)] 
			: [createNoun(noun, NounSuffixToAdd.esu)];
	}
}

function getMasculineNounCaseEndingInI(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.i)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.ayo)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.i)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.ayo)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.im)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.ayo)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.inaa)] 
			: [createNoun(noun, NounSuffixToAdd.eehi), createNoun(noun, NounSuffixToAdd.eebhi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.inaa), createNoun(noun, NounSuffixToAdd.imhaa), createNoun(noun, NounSuffixToAdd.ismaa)] 
			: [createNoun(noun, NounSuffixToAdd.eehi), createNoun(noun, NounSuffixToAdd.eebhi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.ino), createNoun(noun, NounSuffixToAdd.issa)] 
			: [createNoun(noun, NounSuffixToAdd.eenam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.ino), createNoun(noun, NounSuffixToAdd.issa)] 
			: [createNoun(noun, NounSuffixToAdd.eenam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.imhi), createNoun(noun, NounSuffixToAdd.ismim)] 
			: [createNoun(noun, NounSuffixToAdd.eesu)];
	}
}

function getMasculineNounCaseEndingInEE(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.ee)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.ino)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.ee)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.ino)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.inam), createNoun(noun, NounSuffixToAdd.im)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.ino)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.inaa)] 
			: [createNoun(noun, NounSuffixToAdd.eehi), createNoun(noun, NounSuffixToAdd.eebhi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.inaa), createNoun(noun, NounSuffixToAdd.imhaa), createNoun(noun, NounSuffixToAdd.ismaa)] 
			: [createNoun(noun, NounSuffixToAdd.eehi), createNoun(noun, NounSuffixToAdd.eebhi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.ino), createNoun(noun, NounSuffixToAdd.issa)] 
			: [createNoun(noun, NounSuffixToAdd.eenam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.ino), createNoun(noun, NounSuffixToAdd.issa)] 
			: [createNoun(noun, NounSuffixToAdd.eenam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.ini), createNoun(noun, NounSuffixToAdd.imhi), createNoun(noun, NounSuffixToAdd.ismim)] 
			: [createNoun(noun, NounSuffixToAdd.eesu)];
	}
}

function getMasculineNounCaseEndingInOO(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.oo)] 
			: [createNoun(noun, NounSuffixToAdd.oo), createNoun(noun, NounSuffixToAdd.uno)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.oo)] 
			: [createNoun(noun, NounSuffixToAdd.oo), createNoun(noun, NounSuffixToAdd.uno)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.um)] 
			: [createNoun(noun, NounSuffixToAdd.oo), createNoun(noun, NounSuffixToAdd.uno)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.unaa)] 
			: [createNoun(noun, NounSuffixToAdd.oohi), createNoun(noun, NounSuffixToAdd.oobhi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.unaa)] 
			: [createNoun(noun, NounSuffixToAdd.oohi), createNoun(noun, NounSuffixToAdd.oobhi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.uno), createNoun(noun, NounSuffixToAdd.ussa)] 
			: [createNoun(noun, NounSuffixToAdd.oonam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.uno), createNoun(noun, NounSuffixToAdd.ussa)] 
			: [createNoun(noun, NounSuffixToAdd.oonam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.umhi), createNoun(noun, NounSuffixToAdd.usmim)] 
			: [createNoun(noun, NounSuffixToAdd.oosu)];
	}
}

function getMasculineNounCaseEndingInU(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.u)] 
			: [createNoun(noun, NounSuffixToAdd.oo), createNoun(noun, NounSuffixToAdd.avo)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.u)] 
			: [createNoun(noun, NounSuffixToAdd.oo), createNoun(noun, NounSuffixToAdd.avo)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.um)] 
			: [createNoun(noun, NounSuffixToAdd.oo), createNoun(noun, NounSuffixToAdd.avo)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.unaa)] 
			: [createNoun(noun, NounSuffixToAdd.oohi), createNoun(noun, NounSuffixToAdd.oobhi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.unaa)] 
			: [createNoun(noun, NounSuffixToAdd.oohi), createNoun(noun, NounSuffixToAdd.oobhi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.uno), createNoun(noun, NounSuffixToAdd.ussa)] 
			: [createNoun(noun, NounSuffixToAdd.oonam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.uno), createNoun(noun, NounSuffixToAdd.ussa)] 
			: [createNoun(noun, NounSuffixToAdd.oonam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.umhi), createNoun(noun, NounSuffixToAdd.usmim)] 
			: [createNoun(noun, NounSuffixToAdd.oosu)];
	}
}

function getMasculineNounCaseEndingInAR(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aa)] 
			: [createNoun(noun, NounSuffixToAdd.aaro)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aa), createNoun(noun, NounSuffixToAdd.a)] 
			: [createNoun(noun, NounSuffixToAdd.aaro)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aaram)] 
			: [createNoun(noun, NounSuffixToAdd.aaro)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.aaraa)] 
			: [createNoun(noun, NounSuffixToAdd.aarehi), createNoun(noun, NounSuffixToAdd.oohi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aaraa)] 
			: [createNoun(noun, NounSuffixToAdd.aarehi), createNoun(noun, NounSuffixToAdd.oohi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.u), createNoun(noun, NounSuffixToAdd.uno), createNoun(noun, NounSuffixToAdd.ussa)] 
			: [createNoun(noun, NounSuffixToAdd.aaraanam), createNoun(noun, NounSuffixToAdd.oonam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.u), createNoun(noun, NounSuffixToAdd.uno), createNoun(noun, NounSuffixToAdd.ussa)] 
			: [createNoun(noun, NounSuffixToAdd.aaraanam), createNoun(noun, NounSuffixToAdd.oonam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.ari)] 
			: [createNoun(noun, NounSuffixToAdd.aaresu), createNoun(noun, NounSuffixToAdd.oosu)];
	}
}

function getMasculineNounCaseEndingInAR_relationship(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aa)] 
			: [createNoun(noun, NounSuffixToAdd.aro)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aa), createNoun(noun, NounSuffixToAdd.a)] 
			: [createNoun(noun, NounSuffixToAdd.aro)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aram)] 
			: [createNoun(noun, NounSuffixToAdd.aro)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.araa)] 
			: [createNoun(noun, NounSuffixToAdd.arehi), createNoun(noun, NounSuffixToAdd.oohi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.araa)] 
			: [createNoun(noun, NounSuffixToAdd.arehi), createNoun(noun, NounSuffixToAdd.oohi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.u), createNoun(noun, NounSuffixToAdd.uno), createNoun(noun, NounSuffixToAdd.ussa)] 
			: [createNoun(noun, NounSuffixToAdd.araanam), createNoun(noun, NounSuffixToAdd.oonam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.u), createNoun(noun, NounSuffixToAdd.uno), createNoun(noun, NounSuffixToAdd.ussa)] 
			: [createNoun(noun, NounSuffixToAdd.araanam), createNoun(noun, NounSuffixToAdd.oonam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.ari)] 
			: [createNoun(noun, NounSuffixToAdd.aresu), createNoun(noun, NounSuffixToAdd.oosu)];
	}
}

function getFeminineNounCaseEndingInAA(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aa)] 
			: [createNoun(noun, NounSuffixToAdd.aa), createNoun(noun, NounSuffixToAdd.aayo)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.e)] 
			: [createNoun(noun, NounSuffixToAdd.aa), createNoun(noun, NounSuffixToAdd.aayo)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.m)] 
			: [createNoun(noun, NounSuffixToAdd.aa), createNoun(noun, NounSuffixToAdd.aayo)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.aaya)] 
			: [createNoun(noun, NounSuffixToAdd.aahi), createNoun(noun, NounSuffixToAdd.aabhi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aaya)] 
			: [createNoun(noun, NounSuffixToAdd.aahi), createNoun(noun, NounSuffixToAdd.aabhi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aaya)] 
			: [createNoun(noun, NounSuffixToAdd.aanam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.aaya)] 
			: [createNoun(noun, NounSuffixToAdd.aanam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aaya), createNoun(noun, NounSuffixToAdd.aayam)] 
			: [createNoun(noun, NounSuffixToAdd.aasu)];
	}
}

function getFeminineNounCaseEndingInI(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.i)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.iyo)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.i)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.iyo)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.im)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.iyo)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.iyaa)] 
			: [createNoun(noun, NounSuffixToAdd.eehi), createNoun(noun, NounSuffixToAdd.eebhi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.iyaa)] 
			: [createNoun(noun, NounSuffixToAdd.eehi), createNoun(noun, NounSuffixToAdd.eebhi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.iyaa)] 
			: [createNoun(noun, NounSuffixToAdd.eenam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.iyaa)] 
			: [createNoun(noun, NounSuffixToAdd.eenam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.iyaa), createNoun(noun, NounSuffixToAdd.iyam)] 
			: [createNoun(noun, NounSuffixToAdd.eesu)];
	}
}

function getFeminineNounCaseEndingInEE(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.ee)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.iyo)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.ee)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.iyo)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.im)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.iyo)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.iyaa)] 
			: [createNoun(noun, NounSuffixToAdd.eehi), createNoun(noun, NounSuffixToAdd.eebhi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.iyaa)] 
			: [createNoun(noun, NounSuffixToAdd.eehi), createNoun(noun, NounSuffixToAdd.eebhi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.iyaa)] 
			: [createNoun(noun, NounSuffixToAdd.eenam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.iyaa)] 
			: [createNoun(noun, NounSuffixToAdd.eenam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.iyaa), createNoun(noun, NounSuffixToAdd.iyam)] 
			: [createNoun(noun, NounSuffixToAdd.eesu)];
	}
}

function getFeminineNounCaseEndingInU(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.u)] 
			: [createNoun(noun, NounSuffixToAdd.oo), createNoun(noun, NounSuffixToAdd.uyo)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.u)] 
			: [createNoun(noun, NounSuffixToAdd.oo), createNoun(noun, NounSuffixToAdd.uyo)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.um)] 
			: [createNoun(noun, NounSuffixToAdd.oo), createNoun(noun, NounSuffixToAdd.uyo)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.uyaa)] 
			: [createNoun(noun, NounSuffixToAdd.oohi), createNoun(noun, NounSuffixToAdd.oobhi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.uyaa)] 
			: [createNoun(noun, NounSuffixToAdd.oohi), createNoun(noun, NounSuffixToAdd.oobhi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.uyaa)] 
			: [createNoun(noun, NounSuffixToAdd.oonam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.uyaa)] 
			: [createNoun(noun, NounSuffixToAdd.oonam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.uyaa), createNoun(noun, NounSuffixToAdd.uyam)] 
			: [createNoun(noun, NounSuffixToAdd.oosu)];
	}
}

function getFeminineNounCaseEndingInAR_relationship(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aa)] 
			: [createNoun(noun, NounSuffixToAdd.aro)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aa), createNoun(noun, NounSuffixToAdd.a), createNoun(noun, NounSuffixToAdd.e)] 
			: [createNoun(noun, NounSuffixToAdd.aro)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aram)] 
			: [createNoun(noun, NounSuffixToAdd.aro)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.araa), createNoun(noun, NounSuffixToAdd.uyaa)] 
			: [createNoun(noun, NounSuffixToAdd.arehi), createNoun(noun, NounSuffixToAdd.oohi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.araa), createNoun(noun, NounSuffixToAdd.uyaa)] 
			: [createNoun(noun, NounSuffixToAdd.arehi), createNoun(noun, NounSuffixToAdd.oohi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.u), createNoun(noun, NounSuffixToAdd.uyaa), createNoun(noun, NounSuffixToAdd.aaya)] 
			: [createNoun(noun, NounSuffixToAdd.araanam), createNoun(noun, NounSuffixToAdd.oonam), createNoun(noun, NounSuffixToAdd.aanam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.u), createNoun(noun, NounSuffixToAdd.uyaa), createNoun(noun, NounSuffixToAdd.aaya)] 
			: [createNoun(noun, NounSuffixToAdd.araanam), createNoun(noun, NounSuffixToAdd.oonam), createNoun(noun, NounSuffixToAdd.aanam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.ari), createNoun(noun, NounSuffixToAdd.uyaa), createNoun(noun, NounSuffixToAdd.uyam)] 
			: [createNoun(noun, NounSuffixToAdd.aresu), createNoun(noun, NounSuffixToAdd.oosu)];
	}
}

function getNeuterNounCaseEndingInA(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.m)] 
			: [createNoun(noun, NounSuffixToAdd.aa), createNoun(noun, NounSuffixToAdd.aani)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.a)] 
			: [createNoun(noun, NounSuffixToAdd.aani)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.m)] 
			: [createNoun(noun, NounSuffixToAdd.e), createNoun(noun, NounSuffixToAdd.aani)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.ena)] 
			: [createNoun(noun, NounSuffixToAdd.ehi), createNoun(noun, NounSuffixToAdd.ebhi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aa), createNoun(noun, NounSuffixToAdd.mhaa), createNoun(noun, NounSuffixToAdd.smaa)] 
			: [createNoun(noun, NounSuffixToAdd.ehi), createNoun(noun, NounSuffixToAdd.ebhi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.aaya), createNoun(noun, NounSuffixToAdd.ssa)] 
			: [createNoun(noun, NounSuffixToAdd.aanam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.ssa)] 
			: [createNoun(noun, NounSuffixToAdd.aanam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.e), createNoun(noun, NounSuffixToAdd.mhi), createNoun(noun, NounSuffixToAdd.smim)] 
			: [createNoun(noun, NounSuffixToAdd.esu)];
	}
}

function getNeuterNounCaseEndingInI(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.i)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.eeni)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.i)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.eeni)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.im)] 
			: [createNoun(noun, NounSuffixToAdd.ee), createNoun(noun, NounSuffixToAdd.eeni)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.inaa)] 
			: [createNoun(noun, NounSuffixToAdd.eehi), createNoun(noun, NounSuffixToAdd.eebhi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.inaa)] 
			: [createNoun(noun, NounSuffixToAdd.eehi), createNoun(noun, NounSuffixToAdd.eebhi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.ino), createNoun(noun, NounSuffixToAdd.issa)] 
			: [createNoun(noun, NounSuffixToAdd.eenam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.ino), createNoun(noun, NounSuffixToAdd.issa)] 
			: [createNoun(noun, NounSuffixToAdd.eenam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.ini), createNoun(noun, NounSuffixToAdd.imhi), createNoun(noun, NounSuffixToAdd.ismim)] 
			: [createNoun(noun, NounSuffixToAdd.eesu)];
	}
}

function getNeuterNounCaseEndingInU(noun, grammarCase, grammarNumber) {
	var singular = grammarNumber == GrammarNumber.Singular;
	
	switch (grammarCase) {
		case GrammarCase.Nominative: return singular 
			? [createNoun(noun, NounSuffixToAdd.u)] 
			: [createNoun(noun, NounSuffixToAdd.oo), createNoun(noun, NounSuffixToAdd.ooni)];
		case GrammarCase.Vocative: return singular 
			? [createNoun(noun, NounSuffixToAdd.u)] 
			: [createNoun(noun, NounSuffixToAdd.oo), createNoun(noun, NounSuffixToAdd.ooni)];
		case GrammarCase.Accusative: return singular 
			? [createNoun(noun, NounSuffixToAdd.um)] 
			: [createNoun(noun, NounSuffixToAdd.oo), createNoun(noun, NounSuffixToAdd.ooni)];
		case GrammarCase.Instrumental: return singular 
			? [createNoun(noun, NounSuffixToAdd.unaa)] 
			: [createNoun(noun, NounSuffixToAdd.oohi), createNoun(noun, NounSuffixToAdd.oobhi)];
		case GrammarCase.Ablative: return singular 
			? [createNoun(noun, NounSuffixToAdd.unaa)] 
			: [createNoun(noun, NounSuffixToAdd.oohi), createNoun(noun, NounSuffixToAdd.oobhi)];
		case GrammarCase.Dative: return singular 
			? [createNoun(noun, NounSuffixToAdd.uno), createNoun(noun, NounSuffixToAdd.ussa)] 
			: [createNoun(noun, NounSuffixToAdd.oonam)];
		case GrammarCase.Genetive: return singular 
			? [createNoun(noun, NounSuffixToAdd.uno), createNoun(noun, NounSuffixToAdd.ussa)] 
			: [createNoun(noun, NounSuffixToAdd.oonam)];
		case GrammarCase.Locative: return singular 
			? [createNoun(noun, NounSuffixToAdd.umhi), createNoun(noun, NounSuffixToAdd.usmim)] 
			: [createNoun(noun, NounSuffixToAdd.oosu)];
	}
}


