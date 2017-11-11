
function Verbs() {
	this.verbs = [];
	this.map = new Map();
	
	this.init();
}

Verbs.prototype.getVerb = function(base) {
	return this.map.get(base);
}

Verbs.prototype.getTotalVerbs = function() {
	return this.verbs.length;
}

Verbs.prototype.getVerbAt = function(index) {
	return this.verbs[index];
}

Verbs.prototype.getVerbs = function(suffix) {
	var result = []
	for (var i = 0; i < this.verbs.length; i++) {
		var verb = this.verbs[i];
		for (var j = 0; j < verb.suffix.length; j++) {
			if (verb.suffix[j] == suffix) {
				result.push(verb);
			}
		}
	}
	return result;
}

Verbs.prototype.getRandomVerb = function() {
	var i = getRandomInt(0, this.verbs.length);
	return this.verbs[i];
}

Verbs.prototype.init = function() {
	var thisObject = this;
	
	function add(verb) {
		thisObject.verbs.push(verb);
		thisObject.map.set(verb.base, verb);
	}

	// Suffix = a
	add(new Verb("bhas", ["a"], "speaks", "bhas,"));
	add(new Verb("pc", ["a"], "cooks", "pc,"));
	add(new Verb("ks", ["a"], "ploughs"));
	add(new Verb("bhunya,j", ["a"], "eats"));	
	add(new Verb("sy", ["a"], "sleeps"));
	add(new Verb("ps,s", ["a"], "sees"));	
	add(new Verb("chin,d", ["a"], "cuts"));
	add(new Verb("gc,ch", ["a"], "goes"));	
	add(new Verb("AAgc,ch", ["a"], "comes"));
	add(new Verb("dhav", ["a"], "runs"));	
	add(new Verb("hr", ["a"], "carries, takes away"));
	add(new Verb("AAhr", ["a"], "brings"));	
	add(new Verb("AAruh", ["a"], "climbs, ascends"));
	add(new Verb("Oruh", ["a"], "descends"));	
	add(new Verb("yac", ["a"], "begs"));
	add(new Verb("khnna", ["a"], "digs"));	
	add(new Verb("vij,jh", ["a"], "shoots"));
	add(new Verb("p?hr", ["a"], "hits, strikes"));	
	add(new Verb("rk,kh", ["a"], "protects"));
	add(new Verb("vn,d", ["a"], "worships, salutes"));	
	add(new Verb("pt?", ["a"], "falls"));
	add(new Verb("dhov", ["a"], "washes"));	
	add(new Verb("Ic,ch", ["a"], "wishes, desires"));
	add(new Verb("dds", ["a"], "bites"));	
	add(new Verb("puc,ch", ["a"], "questions"));
	add(new Verb("pk,kos", ["a"], "calls, summons"));	
	add(new Verb("khad", ["a"], "eats"));
	add(new Verb("hn", ["a"], "kills"));	
	add(new Verb("Otr", ["a"], "descends"));
	add(new Verb("nik,khm", ["a"], "leaves, sets out"));	
	add(new Verb("rod", ["a"], "cries"));
	add(new Verb("hs", ["a"], "laughs"));	
	add(new Verb("lbh", ["a"], "gets, receives"));
	add(new Verb("pvis", ["a"], "enters"));	
	add(new Verb("d?da", ["a"], "gives"));
	add(new Verb("AAd?da", ["a"], "takes"));	
	add(new Verb("keell", ["a"], "plays"));
	add(new Verb("nhay", ["a"], "bathes"));	
	add(new Verb("AAkdd,ddh", ["a"], "drags"));	
	add(new Verb("pj?h", ["a"], "gives up, abandons"));
	add(new Verb("AAhinna,dd", ["a"], "wanders"));
	add(new Verb("cr", ["a"], "walks"));
	add(new Verb("niseed", ["a"], "sits"));
	add(new Verb("sn,nipt?", ["a"], "assembles"));
	add(new Verb("vihr", ["a"], "dwells"));
	add(new Verb("vs", ["a"], "lives"));
	add(new Verb("jeev", ["a"], "lives"));
	add(new Verb("titth", ["a"], "stands"));
	add(new Verb("Up,pt?", ["a"], "flies, jumps up"));
	add(new Verb("tr", ["a"], "crosses (water)"));
	add(new Verb("Ut,tr", ["a"], "comes out (of water)"));
	add(new Verb("pseed", ["a"], "becomes glad, is pleased with"));
	add(new Verb("vivr", ["a"], "opens"));
	add(new Verb("nc,c", ["a"], "dances"));
	add(new Verb("nik,khip", ["a"], "puts"));
	add(new Verb("Utt,tthh", ["a"], "gets up"));
	add(new Verb("phus", ["a"], "touches"));
	add(new Verb("Anusas", ["a"], "instructs"));
	add(new Verb("Ovd", ["a"], "advises"));
	add(new Verb("s.hr", ["a"], "collects"));
	add(new Verb("AAsinya,c", ["a"], "sprinkles"));
	add(new Verb("Ak,kos", ["a"], "scolds"));
	add(new Verb("bhin,d", ["a"], "breaks"));
	add(new Verb("pib", ["a"], "drinks"));
	add(new Verb("piv", ["a"], "drinks"));
	add(new Verb("priyes", ["a"], "searches, seeks"));	
	add(new Verb("AArbh", ["a"], "begins"));	
	add(new Verb("Us,sh", ["a"], "tries"));	
	add(new Verb("Upsnga,km", ["a"], "approaches"));	
	add(new Verb("Adhigc,ch", ["a"], "understands, attains"));	
	add(new Verb("gay", ["a"], "sings"));	
	add(new Verb("AAms", ["a"], "touches, strokes"));	
	add(new Verb("bhay", ["a"], "fears"));	
	add(new Verb("cv", ["a"], "departs, dies"));	
	add(new Verb("Up,pj,j", ["a"], "is born"));	
	add(new Verb("khip", ["a"], "throws"));	
	add(new Verb("vp", ["a"], "sows"));	
	add(new Verb("AAknga,kh", ["a"], "hopes"));	
	add(new Verb("sib,b", ["a"], "sows"));

	// Suffix = e/aya
	add(new Verb("cor", ["e", "aya"], "to steal"));
	add(new Verb("des", ["e", "aya"], "preaches"));	
	add(new Verb("cin,t", ["e", "aya"], "thinks"));
	add(new Verb("pooj", ["e", "aya"], "honours, offers"));
	add(new Verb("poor", ["e", "aya"], "fills"));
	add(new Verb("peell", ["e", "aya"], "oppresses"));
	add(new Verb("kath", ["e", "aya"], "speaks"));
	add(new Verb("Udd,dd", ["e", "aya"], "flies"));
	add(new Verb("Ud", ["e", "aya"], "(sun or moon) rises"));
	add(new Verb("rop", ["e", "aya"], "plants"));
	add(new Verb("mn,t", ["e", "aya"], "discusses, takes counsel"));
	add(new Verb("AAmn,t", ["e", "aya"], "addresses"));
	add(new Verb("nimn,t", ["e", "aya"], "invites"));
	add(new Verb("Olok", ["e", "aya"], "looks at"));
	add(new Verb("jal", ["e", "aya"], "kindles"));
	add(new Verb("chad", ["e", "aya"], "covers"));
	add(new Verb("mar", ["e", "aya"], "kills"));
	add(new Verb("n", ["e", "aya"], "leads, takes away"));
	add(new Verb("AAn", ["e", "aya"], "brings"));
	add(new Verb("tthp", ["e", "aya"], "keeps"));
	add(new Verb("pat", ["e", "aya"], "fells"));
	add(new Verb("pal", ["e", "aya"], "rules, governs"));
	add(new Verb("privj,j", ["e", "aya"], "avoids"));
	add(new Verb("Obhas", ["e", "aya"], "illuminates"));
	add(new Verb("d", ["e", "aya"], "gives"));
	
	// Suffix = nnaa
	add(new Verb("ki", ["nnaa"], "to buy"));
	add(new Verb("vik,ki", ["nnaa"], "sells"));
	add(new Verb("su", ["nnaa"], "hears"));
	add(new Verb("papu", ["nnaa"], "reaches"));	
	add(new Verb("pahi", ["nnaa"], "sends"));
	
	// Suffix = nnaha
	add(new Verb("g", ["nnaha"], "takes"));
	add(new Verb("Ug,g", ["nnaha"], "learns"));
	
	// Suffix = na
	add(new Verb("mi", ["na"], "measures"));
	add(new Verb("ja", ["na"], "knows"));	
	add(new Verb("ji", ["na"], "wins"));
	add(new Verb("Oci", ["na"], "picks, collects"));		

	// Suffix = o
	//add(new Verb("pp,p", ["o"], "reaches"));
}
