//
// ############ ############
//

function Sentence1(noun, verb) {
	this.noun = noun;
	this.verb = verb;
}

Sentence1.prototype.make = function(grammarNumber) {
	var subject = this.noun.getCase(GrammarCase.Nominative, grammarNumber);
	var action = this.verb.getPresentActiveConjugation(Person.Third, grammarNumber);
	return [subject[0], action[0]]
}

//
// ############ ############
//

function Sentence2(noun1, verb, noun2) {
	this.noun1 = noun1;
	this.verb = verb;
	this.noun2 = noun2;
}

Sentence2.prototype.make = function(grammarNumber) {
	var subject = this.noun1.getCase(GrammarCase.Nominative, grammarNumber);
	var action = this.verb.getPresentActiveConjugation(Person.Third, grammarNumber);
	var object = this.noun2.getCase(GrammarCase.Accusative, grammarNumber);	
	return [subject[0], object[0], action[0]]
}

//
// ############ ############
//

