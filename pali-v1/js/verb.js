

function Verb(base, suffix, meanings, root=null) {
	this.base = base;
	this.meanings = meanings;
	this.suffix = suffix;
	this.root = root;
}

Verb.prototype.getRepr = function(suffix=null) {
	suffix = suffix == null ? this.suffix[0] : suffix;
	return this.getPresentActiveConjugation(Person.Third, GrammarNumber.Singular, suffix)[0];
}

Verb.prototype.toString = function() {
	return this.base;
}

Verb.prototype.getBase = function() {
	return this.base;
}

Verb.prototype.getConjugation = function(tense, voice, person, grammarNumber, suffix=null) {
	suffix = suffix == null ? this.suffix[0] : suffix;
	if (tense == Tense.Present && voice == Voice.Active) {
		if (suffix == "a") {
			return getConjugationForActiveVoicePresentTenseWithSuffix_a(this, person, grammarNumber, suffix);
		} else if (suffix == "e") {
			return getConjugationForActiveVoicePresentTenseWithSuffix_e(this, person, grammarNumber, suffix);
		} else if (suffix == "aya") {
			return getConjugationForActiveVoicePresentTenseWithSuffix_a(this, person, grammarNumber, suffix);
		} else if (suffix == "nnaa" || suffix == "na" || suffix == "nnaha" || suffix == "o") {
			return getConjugationForActiveVoicePresentTenseWithSuffix_nnaa(this, person, grammarNumber, suffix);
		}
	} else {
		throw "Illegal State: tense=" + tense + " voice=" + voice + " person=" + person + " number=" + grammarNumber + " for verb=" + this;
	}
}

Verb.prototype.getPresentActiveConjugation = function(person, grammarNumber, suffix=null) {
	return this.getConjugation(Tense.Present, Voice.Active, person, grammarNumber, suffix);
}

function createVerb(verb, suffix, ending) {
	return verb.base + VerbSuffixToAppend[suffix] + ending;
}

function getConjugationForActiveVoicePresentTenseWithSuffix_a(verb, person, grammarNumber, suffix) {
	if (person == Person.Third) {
		return grammarNumber == GrammarNumber.Singular ? [createVerb(verb, suffix, VerbEndingToAdd.ti)] : [createVerb(verb, suffix, VerbEndingToAdd.nti)];
	} else if (person == Person.Second) {
		return grammarNumber == GrammarNumber.Singular ? [createVerb(verb, suffix, VerbEndingToAdd.si)] : [createVerb(verb, suffix, VerbEndingToAdd.tha)];
	} else if (person == Person.First) {
		return grammarNumber == GrammarNumber.Singular ? [createVerb(verb, suffix, VerbEndingToAdd.aami)] : [createVerb(verb, suffix, VerbEndingToAdd.aama)];
	} else {
		throw "Unexpected person: " + person;
	}
}

function getConjugationForActiveVoicePresentTenseWithSuffix_e(verb, person, grammarNumber, suffix) {
	if (person == Person.Third) {
		return grammarNumber == GrammarNumber.Singular ? [createVerb(verb, suffix, VerbEndingToAdd.ti)] : [createVerb(verb, suffix, VerbEndingToAdd.nti)];
	} else if (person == Person.Second) {
		return grammarNumber == GrammarNumber.Singular ? [createVerb(verb, suffix, VerbEndingToAdd.si)] : [createVerb(verb, suffix, VerbEndingToAdd.tha)];
	} else if (person == Person.First) {
		return grammarNumber == GrammarNumber.Singular ? [createVerb(verb, suffix, VerbEndingToAdd.mi)] : [createVerb(verb, suffix, VerbEndingToAdd.ma)];
	} else {
		throw "Unexpected person: " + person;
	}
}

function getConjugationForActiveVoicePresentTenseWithSuffix_nnaa(verb, person, grammarNumber, suffix) {
	if (person == Person.Third) {
		return grammarNumber == GrammarNumber.Singular ? [createVerb(verb, suffix, VerbEndingToAdd.aati)] : [createVerb(verb, suffix, VerbEndingToAdd.anti)];
	} else if (person == Person.Second) {
		return grammarNumber == GrammarNumber.Singular ? [createVerb(verb, suffix, VerbEndingToAdd.aasi)] : [createVerb(verb, suffix, VerbEndingToAdd.aatha)];
	} else if (person == Person.First) {
		return grammarNumber == GrammarNumber.Singular ? [createVerb(verb, suffix, VerbEndingToAdd.aami)] : [createVerb(verb, suffix, VerbEndingToAdd.aama)];
	} else {
		throw "Unexpected person: " + person;
	}
}