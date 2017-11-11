
function VerbsView(verbs, startInclusive, endExclusive) {
	this.verbs = verbs;
	this.startInclusive = startInclusive;
	this.endExclusive = Math.min(this.verbs.getTotalVerbs(), endExclusive);
}

VerbsView.prototype.getVerb = function(base) {
	return this.verbs.getVerb(base);
}

VerbsView.prototype.getTotalVerbs = function() {
	return this.endExclusive - this.startInclusive;
}

VerbsView.prototype.getVerbAt = function(index) {
	assert(this.startInclusive + index < this.endExclusive, "Out of bounds index " + index + " [" + this.startInclusive + ", " + this.endExclusive + ").");
	return this.verbs.verbs[this.startInclusive + index];
}

VerbsView.prototype.getVerbs = function(suffix) {
	var result = []
	for (var i = 0; i < this.getTotalVerbs(); i++) {
		var verb = this.getVerbAt(i);
		for (var j = 0; j < verb.suffix.length; j++) {
			if (verb.suffix[j] == suffix) {
				result.push(verb);
			}
		}
	}
	return result;
}

VerbsView.prototype.getRandomVerb = function() {
	var i = getRandomInt(this.startInclusive, this.endExclusive);
	return this.getVerbAt(i);
}
