
function NounsView(nouns, startInclusive, endExclusive) {
	this.nouns = nouns;
	this.startInclusive = startInclusive;
	this.endExclusive = Math.min(this.nouns.getTotalNouns(), endExclusive);
}

NounsView.prototype.getNoun = function(base) {
	return this.nouns.getNoun(base);
}

NounsView.prototype.getTotalNouns = function() {
	return this.endExclusive - this.startInclusive;
}

NounsView.prototype.getNounAt = function(index) {
	assert(this.startInclusive + index < this.endExclusive, "Out of bounds index " + index + " [" + this.startInclusive + ", " + this.endExclusive + ").");
	return this.nouns.nouns[this.startInclusive + index];
}

NounsView.prototype.getNouns = function(grammarGender, nounEnding) {
	var result = []
	for (var i = 0; i < this.getTotalNouns(); i++) {
		var noun = this.getNounAt(i);
		if (noun.gender == grammarGender && noun.nounEnding == nounEnding) {
			result.push(noun);
		}
	}
	return result;
}

NounsView.prototype.getRandomNoun = function() {
	var i = getRandomInt(this.startInclusive, this.endExclusive);
	return this.getNounAt(i);
}
