
function Nouns() {
	this.nouns = [];
	this.map = new Map();
	
	this.init();
}

Nouns.prototype.getNoun = function(base) {
	return this.map.get(base);
}

Nouns.prototype.getTotalNouns = function() {
	return this.nouns.length;
}

Nouns.prototype.getNounAt = function(index) {
	return this.nouns[index];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

Nouns.prototype.getNouns = function(grammarGender, nounEnding) {
	var result = []
	for (var i = 0; i < this.nouns.length; i++) {
		var noun = this.nouns[i];
		if (noun.gender == grammarGender && noun.nounEnding == nounEnding) {
			result.push(noun);
		}
	}
	return result;
}

Nouns.prototype.getRandomNoun = function() {
	var i = getRandomInt(0, this.nouns.length);
	return this.nouns[i];
}

Nouns.prototype.init = function() {
	var thisObject = this;
	
	function add(noun) {
		thisObject.nouns.push(noun);
		thisObject.map.set(noun.base, noun);
	}

	// Masculine ending in a
	add(new Noun("nr", "a", "man, person", GrammarGender.Masculine));
	add(new Noun("bud,dh", "a", "the Buddha", GrammarGender.Masculine));
	add(new Noun("t?thagt", "a", "the Buddha", GrammarGender.Masculine));
	add(new Noun("sugt", "a", "the Buddha", GrammarGender.Masculine));
	add(new Noun("mnus,s", "a", "man, human being", GrammarGender.Masculine));	
	add(new Noun("puris", "a", "man, person", GrammarGender.Masculine));
	add(new Noun("ks,sk", "a", "farmer", GrammarGender.Masculine));
	add(new Noun("b,rah,mnna", "a", "brahmin", GrammarGender.Masculine));
	add(new Noun("put,t", "a", "son", GrammarGender.Masculine));
	add(new Noun("matul", "a", "uncle", GrammarGender.Masculine));
	add(new Noun("kumar", "a", "boy", GrammarGender.Masculine));
	add(new Noun("vannaij", "a", "merchant", GrammarGender.Masculine));
	add(new Noun("bhoopal", "a", "king", GrammarGender.Masculine));
	add(new Noun("shay", "a", "friend", GrammarGender.Masculine));
	add(new Noun("mit,t", "a", "friend", GrammarGender.Masculine));
	add(new Noun("shayk", "a", "friend", GrammarGender.Masculine));
	add(new Noun("dhm,m", "a", "the doctrine, truth", GrammarGender.Masculine));
	add(new Noun("bht,t", "a", "rice", GrammarGender.Masculine));
	add(new Noun("Odn", "a", "cooked rice", GrammarGender.Masculine));
	add(new Noun("gam", "a", "village", GrammarGender.Masculine));
	add(new Noun("suriy", "a", "sun", GrammarGender.Masculine));
	add(new Noun("cn,d", "a", "moon", GrammarGender.Masculine));
	add(new Noun("kuk,kur", "a", "dog", GrammarGender.Masculine));
	add(new Noun("sunkh", "a", "dog", GrammarGender.Masculine));
	add(new Noun("sonna", "a", "dog", GrammarGender.Masculine));
	add(new Noun("vihar", "a", "monastery", GrammarGender.Masculine));
	add(new Noun("pt,t", "a", "bowl", GrammarGender.Masculine));
	add(new Noun("AAvatt", "a", "pit", GrammarGender.Masculine));
	add(new Noun("pb,bt", "a", "mountain", GrammarGender.Masculine));
	add(new Noun("yack", "a", "beggar", GrammarGender.Masculine));
	add(new Noun("sigal", "a", "jackal", GrammarGender.Masculine));
	add(new Noun("ruk,kh", "a", "tree", GrammarGender.Masculine));
	add(new Noun("rth", "a", "vehicle, charriot", GrammarGender.Masculine));	
	add(new Noun("sktt", "a", "cart", GrammarGender.Masculine));	
	add(new Noun("ht,th", "a", "hand", GrammarGender.Masculine));	
	add(new Noun("pad", "a", "foot", GrammarGender.Masculine));	
	add(new Noun("mg,g", "a", "path", GrammarGender.Masculine));	
	add(new Noun("deep", "a", "island, lamp", GrammarGender.Masculine));	
	add(new Noun("savk", "a", "disciple", GrammarGender.Masculine));	
	add(new Noun("smnna", "a", "recluse, monk", GrammarGender.Masculine));	
	add(new Noun("sg,g", "a", "heaven", GrammarGender.Masculine));	
	add(new Noun("As,s", "a", "horse", GrammarGender.Masculine));	
	add(new Noun("mig", "a", "deer", GrammarGender.Masculine));	
	add(new Noun("sr", "a", "arrow", GrammarGender.Masculine));	
	add(new Noun("pasanna", "a", "rock, stone", GrammarGender.Masculine));	
	add(new Noun("kkc", "a", "saw", GrammarGender.Masculine));	
	add(new Noun("khg,g", "a", "sword", GrammarGender.Masculine));	
	add(new Noun("cor", "a", "thief", GrammarGender.Masculine));	
	add(new Noun("pnna,ddit", "a", "wise man", GrammarGender.Masculine));	
	add(new Noun("dheevr", "a", "fisherman", GrammarGender.Masculine));	
	add(new Noun("mc,ch", "a", "fish", GrammarGender.Masculine));	
	add(new Noun("pittk", "a", "basket", GrammarGender.Masculine));	
	add(new Noun("Amc,c", "a", "minister", GrammarGender.Masculine));	
	add(new Noun("Upask", "a", "lay devotee", GrammarGender.Masculine));	
	add(new Noun("pasad", "a", "palace", GrammarGender.Masculine));	
	add(new Noun("dark", "a", "child", GrammarGender.Masculine));	
	add(new Noun("sattk", "a", "garment", GrammarGender.Masculine));	
	add(new Noun("rjk", "a", "washerman", GrammarGender.Masculine));	
	add(new Noun("sp,p", "a", "serpent", GrammarGender.Masculine));	
	add(new Noun("pnya,h", "a", "question", GrammarGender.Masculine));	
	add(new Noun("suk", "a", "parrot", GrammarGender.Masculine));	
	add(new Noun("suv", "a", "parrot", GrammarGender.Masculine));	
	add(new Noun("sookr", "a", "pig", GrammarGender.Masculine));	
	add(new Noun("vrah", "a", "pig", GrammarGender.Masculine));	
	add(new Noun("sopan", "a", "stairway", GrammarGender.Masculine));	
	add(new Noun("taps", "a", "hermit", GrammarGender.Masculine));	
	add(new Noun("AAcriy", "a", "teacher", GrammarGender.Masculine));	
	add(new Noun("vej,j", "a", "doctor", GrammarGender.Masculine));	
	add(new Noun("seeh", "a", "lion", GrammarGender.Masculine));	
	add(new Noun("lud,dk", "a", "hunter", GrammarGender.Masculine));	
	add(new Noun("Aj", "a", "goat", GrammarGender.Masculine));	
	add(new Noun("vanr", "a", "monkey", GrammarGender.Masculine));	
	add(new Noun("mk,ktt", "a", "monkey", GrammarGender.Masculine));	
	add(new Noun("labh", "a", "profit", GrammarGender.Masculine));	
	add(new Noun("mnya,c", "a", "bed", GrammarGender.Masculine));	
	add(new Noun("kud,dal", "a", "hoe", GrammarGender.Masculine));	
	add(new Noun("navik", "a", "sailor", GrammarGender.Masculine));	
	add(new Noun("AAkas", "a", "sky", GrammarGender.Masculine));	
	add(new Noun("smud,d", "a", "ocean, sea", GrammarGender.Masculine));	
	add(new Noun("dev", "a", "deity, god", GrammarGender.Masculine));	
	add(new Noun("sur", "a", "deity, god", GrammarGender.Masculine));	
	add(new Noun("lok", "a", "world", GrammarGender.Masculine));	
	add(new Noun("AAlok", "a", "light", GrammarGender.Masculine));	
	add(new Noun("skunna", "a", "bird", GrammarGender.Masculine));	
	add(new Noun("kak", "a", "crow", GrammarGender.Masculine));	
	add(new Noun("nivas", "a", "house", GrammarGender.Masculine));	
	add(new Noun("sp,puris", "a", "virtuous man", GrammarGender.Masculine));	
	add(new Noun("Asp,puris", "a", "wicked man", GrammarGender.Masculine));	
	add(new Noun("kay", "a", "body", GrammarGender.Masculine));	
	add(new Noun("doot", "a", "messenger", GrammarGender.Masculine));	
	add(new Noun("gonna", "a", "ox, bull", GrammarGender.Masculine));
	// Warder, try to verify
	add(new Noun("Ak,khdhut,t", "a", "gambler", GrammarGender.Masculine));
	add(new Noun("Ak,kh", "a", "die (dice), axle", GrammarGender.Masculine));
	add(new Noun("Ag,g", "a", "top, tip, the supreme", GrammarGender.Masculine));
	add(new Noun("Acel", "a", "naked ascetic", GrammarGender.Masculine));
	add(new Noun("Anya,nyaat", "a", "stranger", GrammarGender.Masculine));
	add(new Noun("Add,ddhmas", "a", "fortnight", GrammarGender.Masculine));
	add(new Noun("Add,ddh", "a", "half", GrammarGender.Masculine));
	add(new Noun("Anna,nnav", "a", "flood", GrammarGender.Masculine));
	
	// Masculine ending in i
	add(new Noun("Ag,gi", "i", "fire", GrammarGender.Masculine));
	add(new Noun("muni", "i", "sage", GrammarGender.Masculine));	
	add(new Noun("Isi", "i", "sage", GrammarGender.Masculine));
	add(new Noun("kvi", "i", "poet", GrammarGender.Masculine));	
	add(new Noun("Ari", "i", "enemy", GrammarGender.Masculine));
	add(new Noun("bhoopti", "i", "king", GrammarGender.Masculine));	
	add(new Noun("pti", "i", "husband, master", GrammarGender.Masculine));
	add(new Noun("g?hpti", "i", "householder", GrammarGender.Masculine));	
	add(new Noun("Adhipti", "i", "lord, leader", GrammarGender.Masculine));
	add(new Noun("Atithi", "i", "guest", GrammarGender.Masculine));	
	add(new Noun("v,yadhi", "i", "illness", GrammarGender.Masculine));
	add(new Noun("Ud?dhi", "i", "ocean", GrammarGender.Masculine));	
	add(new Noun("nidhi", "i", "(hidden) treasure", GrammarGender.Masculine));
	add(new Noun("veehi", "i", "paddy", GrammarGender.Masculine));	
	add(new Noun("kpi", "i", "monkey", GrammarGender.Masculine));
	add(new Noun("Ahi", "i", "serpent", GrammarGender.Masculine));	
	add(new Noun("deepi", "i", "leopard", GrammarGender.Masculine));
	add(new Noun("rvi", "i", "sun", GrammarGender.Masculine));	
	add(new Noun("giri", "i", "mountain", GrammarGender.Masculine));
	add(new Noun("mnnai", "i", "gem", GrammarGender.Masculine));	
	add(new Noun("Asi", "i", "sword", GrammarGender.Masculine));
	add(new Noun("rasi", "i", "heap", GrammarGender.Masculine));	
	add(new Noun("pannai", "i", "hand", GrammarGender.Masculine));
	add(new Noun("kuc,chi", "i", "belly", GrammarGender.Masculine));	
	add(new Noun("mutt,tthi", "i", "fist, hammer", GrammarGender.Masculine));
	
	// Masculine ending in ee
	add(new Noun("pk,khee", "ee", "bird", GrammarGender.Masculine));
	add(new Noun("ht,thee", "ee", "elephant", GrammarGender.Masculine));
	add(new Noun("kree", "ee", "elephant", GrammarGender.Masculine));
	add(new Noun("samee", "ee", "lord, husband", GrammarGender.Masculine));
	add(new Noun("sett,tthee", "ee", "banker", GrammarGender.Masculine));
	add(new Noun("sukhee", "ee", "one who is happy", GrammarGender.Masculine));
	add(new Noun("mn,tee", "ee", "minister", GrammarGender.Masculine));
	add(new Noun("sikhee", "ee", "peacock", GrammarGender.Masculine));
	add(new Noun("pannaee", "ee", "living being", GrammarGender.Masculine));
	add(new Noun("datthee", "ee", "tusker", GrammarGender.Masculine));
	add(new Noun("deeghjeevee", "ee", "one with long life", GrammarGender.Masculine));
	add(new Noun("blee", "ee", "powerful one", GrammarGender.Masculine));
	add(new Noun("vdd,ddhkee", "ee", "carpenter", GrammarGender.Masculine));
	add(new Noun("sarthee", "ee", "charioteer", GrammarGender.Masculine));
	add(new Noun("kutt,tthee", "ee", "leper", GrammarGender.Masculine));
	add(new Noun("papkaree", "ee", "evil doer", GrammarGender.Masculine));
	
	// Masculine ending in u
	add(new Noun("gru", "u", "teacher", GrammarGender.Masculine));
	add(new Noun("bhik,khu", "u", "monk", GrammarGender.Masculine));
	add(new Noun("bn,dhu", "u", "relation", GrammarGender.Masculine));
	add(new Noun("tru", "u", "tree", GrammarGender.Masculine));
	add(new Noun("bhu", "u", "arm", GrammarGender.Masculine));
	add(new Noun("sin,dhu", "u", "sea", GrammarGender.Masculine));
	add(new Noun("phrsu", "u", "axe", GrammarGender.Masculine));
	add(new Noun("psu", "u", "beast", GrammarGender.Masculine));
	add(new Noun("AAkhu", "u", "rat", GrammarGender.Masculine));
	add(new Noun("Uc,chu", "u", "sugar cane", GrammarGender.Masculine));
	add(new Noun("vellu", "u", "bamboo", GrammarGender.Masculine));
	add(new Noun("kttc,chu", "u", "spoon", GrammarGender.Masculine));
	add(new Noun("st,tu", "u", "enemy", GrammarGender.Masculine));
	add(new Noun("setu", "u", "bridge", GrammarGender.Masculine));
	add(new Noun("ketu", "u", "banner", GrammarGender.Masculine));
	add(new Noun("susu", "u", "young one", GrammarGender.Masculine));
	
	// Masculine ending in oo
	add(new Noun("vidoo", "oo", "wise man", GrammarGender.Masculine));
	add(new Noun("pbhoo", "oo", "eminent person", GrammarGender.Masculine));
	add(new Noun("sb,bnya,nyaoo", "oo", "omniscient one", GrammarGender.Masculine));
	add(new Noun("vinya,nyaoo", "oo", "wise man", GrammarGender.Masculine));
	add(new Noun("vdnya,nyaoo", "oo", "philanthropist", GrammarGender.Masculine));
	add(new Noun("At,thnya,nyaoo", "oo", "benevolent man", GrammarGender.Masculine));
	add(new Noun("mt,tnya,nyaoo", "oo", "moderate or abstemious man", GrammarGender.Masculine));
	
	// Masculine ending in u/ar
	add(new Noun("st,thr,", "ar", "teacher", GrammarGender.Masculine, "u"));
	add(new Noun("kt,?tr,", "ar", "doer", GrammarGender.Masculine, "u"));	
	add(new Noun("gn,tr,", "ar", "goer", GrammarGender.Masculine, "u"));
	add(new Noun("sotr,", "ar", "hearer", GrammarGender.Masculine, "u"));	
	add(new Noun("datr,", "ar", "giver", GrammarGender.Masculine, "u"));
	add(new Noun("netr,", "ar", "leader", GrammarGender.Masculine, "u"));	
	add(new Noun("vt,tr,", "ar", "sayer", GrammarGender.Masculine, "u"));
	add(new Noun("jetr,", "ar", "victor", GrammarGender.Masculine, "u"));	
	add(new Noun("vinetr,", "ar", "disciplinarian", GrammarGender.Masculine, "u"));
	add(new Noun("vinya,nyaatr,", "ar", "knower", GrammarGender.Masculine, "u"));	
	add(new Noun("bht,tr,", "ar", "husband", GrammarGender.Masculine, "u"));
	add(new Noun("nt,tr,", "ar", "grandson", GrammarGender.Masculine, "u"));	

	// Masculine ending in u/ar (relationship)
	add(new Noun("pitr,", "ar", "father", GrammarGender.Masculine, "u"));	
	add(new Noun("bhatr,", "ar", "brother", GrammarGender.Masculine, "u"));	
	
	// Feminine ending in aa
	add(new Noun("vnita", "aa", "woman", GrammarGender.Feminine));
	add(new Noun("knya,nyaa", "aa", "girl", GrammarGender.Feminine));
	add(new Noun("darika", "aa", "girl", GrammarGender.Feminine));
	add(new Noun("gnga,ga", "aa", "river Ganges", GrammarGender.Feminine));
	add(new Noun("nava", "aa", "ship", GrammarGender.Feminine));
	add(new Noun("Am,ma", "aa", "mother", GrammarGender.Feminine));
	add(new Noun("pnya,nyaa", "aa", "wisdom", GrammarGender.Feminine));
	add(new Noun("sala", "aa", "hall", GrammarGender.Feminine));
	add(new Noun("bhriya", "aa", "wife", GrammarGender.Feminine));
	add(new Noun("sbha", "aa", "assembly", GrammarGender.Feminine));
	add(new Noun("ktha", "aa", "speech", GrammarGender.Feminine));
	add(new Noun("lta", "aa", "creeper", GrammarGender.Feminine));
	add(new Noun("guha", "aa", "cave", GrammarGender.Feminine));
	add(new Noun("chaya", "aa", "shadow", GrammarGender.Feminine));
	add(new Noun("valuka", "aa", "sand", GrammarGender.Feminine));
	add(new Noun("mnya,joosa", "aa", "box", GrammarGender.Feminine));
	add(new Noun("mala", "aa", "garland", GrammarGender.Feminine));
	add(new Noun("sura", "aa", "liquor", GrammarGender.Feminine));
	add(new Noun("sakha", "aa", "branch", GrammarGender.Feminine));
	add(new Noun("devta", "aa", "deity", GrammarGender.Feminine));
	add(new Noun("prisa", "aa", "retinue", GrammarGender.Feminine));
	add(new Noun("sd,dha", "aa", "faith, devotion", GrammarGender.Feminine));
	add(new Noun("geeva", "aa", "neck", GrammarGender.Feminine));
	add(new Noun("jiv,ha", "aa", "tongue", GrammarGender.Feminine));
	add(new Noun("pipasa", "aa", "thirst", GrammarGender.Feminine));
	add(new Noun("khuda", "aa", "hunger", GrammarGender.Feminine));
	
	// Feminine ending in i
	add(new Noun("bhoomi", "i", "earth, ground", GrammarGender.Feminine));
	add(new Noun("Anga,guli", "i", "finger", GrammarGender.Feminine));
	add(new Noun("Attvi", "i", "forest", GrammarGender.Feminine));
	add(new Noun("rt,ti", "i", "night", GrammarGender.Feminine));
	add(new Noun("donnai", "i", "boat", GrammarGender.Feminine));
	add(new Noun("yuvti", "i", "maiden", GrammarGender.Feminine));
	add(new Noun("ytt,tthi", "i", "walking stick", GrammarGender.Feminine));
	add(new Noun("Asni", "i", "thunderbolt", GrammarGender.Feminine));
	add(new Noun("nalli", "i", "unit of measure", GrammarGender.Feminine));
	add(new Noun("rs,mi", "i", "ray", GrammarGender.Feminine));
	add(new Noun("Id,dhi", "i", "psychic power", GrammarGender.Feminine));
	add(new Noun("sm,mj,jni", "i", "broom", GrammarGender.Feminine));
	
	// Feminine ending in ee
	add(new Noun("ndee", "ee", "river", GrammarGender.Feminine));
	add(new Noun("naree", "ee", "woman", GrammarGender.Feminine));
	add(new Noun("It,thee", "ee", "woman", GrammarGender.Feminine));
	add(new Noun("trunnaee", "ee", "young woman", GrammarGender.Feminine));
	add(new Noun("bhginee", "ee", "sister", GrammarGender.Feminine));
	add(new Noun("vapee", "ee", "tank", GrammarGender.Feminine));
	add(new Noun("pok,khrnnaee", "ee", "pond", GrammarGender.Feminine));
	add(new Noun("kdlee", "ee", "banana", GrammarGender.Feminine));
	add(new Noun("b,rh,mnnaee", "ee", "brahmin woman", GrammarGender.Feminine));
	add(new Noun("gavee", "ee", "cow", GrammarGender.Feminine));
	add(new Noun("rajinee", "ee", "queen", GrammarGender.Feminine));
	add(new Noun("devee", "ee", "queen", GrammarGender.Feminine));	
	add(new Noun("kumaree", "ee", "girl", GrammarGender.Feminine));
	
	// Feminine ending in u
	add(new Noun("dhenu", "u", "cow", GrammarGender.Feminine));
	add(new Noun("yagu", "u", "gruel", GrammarGender.Feminine));
	add(new Noun("kasu", "u", "pit", GrammarGender.Feminine));
	add(new Noun("vij,ju", "u", "lightening", GrammarGender.Feminine));
	add(new Noun("rj,ju", "u", "rope", GrammarGender.Feminine));
	add(new Noun("d?d,du", "u", "eczema", GrammarGender.Feminine));
	add(new Noun("knnaeru", "u", "cow-elephant", GrammarGender.Feminine));
	add(new Noun("dhatu", "u", "element, relic", GrammarGender.Feminine));
	add(new Noun("ss,su", "u", "mother-in-law", GrammarGender.Feminine));
	add(new Noun("vdhu", "u", "daughter-in-law", GrammarGender.Feminine));
	
	// Feminine ending in u/ar (relationship)
	add(new Noun("matr,", "ar", "mother", GrammarGender.Feminine, "u"));	
	add(new Noun("dheetr,", "ar", "daughter", GrammarGender.Feminine, "u"));	
	add(new Noun("duhitr,", "ar", "daughter", GrammarGender.Feminine, "u"));
	
	// Neuter ending in a
	add(new Noun("phl", "a", "fruit", GrammarGender.Neuter));
	add(new Noun("nyn", "a", "eye", GrammarGender.Neuter));
	add(new Noun("locn", "a", "eye", GrammarGender.Neuter));
	add(new Noun("Udk", "a", "water", GrammarGender.Neuter));
	add(new Noun("jl", "a", "water", GrammarGender.Neuter));
	add(new Noun("Arnya,nya", "a", "forest", GrammarGender.Neuter));
	add(new Noun("vn", "a", "forest", GrammarGender.Neuter));
	add(new Noun("pup,ph", "a", "flower", GrammarGender.Neuter));
	add(new Noun("kusum", "a", "flower", GrammarGender.Neuter));
	add(new Noun("geh", "a", "house", GrammarGender.Neuter));
	add(new Noun("ghr", "a", "house", GrammarGender.Neuter));
	add(new Noun("AAsn", "a", "seat", GrammarGender.Neuter));
	add(new Noun("pnna,nna", "a", "leaf", GrammarGender.Neuter));
	add(new Noun("tinna", "a", "grass", GrammarGender.Neuter));
	add(new Noun("kheer", "a", "milk", GrammarGender.Neuter));
	add(new Noun("ngr", "a", "city, town", GrammarGender.Neuter));
	add(new Noun("Uy,yan", "a", "park", GrammarGender.Neuter));
	add(new Noun("khet,t", "a", "field", GrammarGender.Neuter));
	add(new Noun("bhnna,dd", "a", "goods", GrammarGender.Neuter));
	add(new Noun("seel", "a", "virtue, precept", GrammarGender.Neuter));
	add(new Noun("dan", "a", "alms, charity", GrammarGender.Neuter));
	add(new Noun("roop", "a", "object", GrammarGender.Neuter));
	add(new Noun("d,var", "a", "door", GrammarGender.Neuter));
	add(new Noun("vt,th", "a", "cloth", GrammarGender.Neuter));		
	
	// Neuter ending in i
	add(new Noun("Att,tthi", "i", "bone, seed", GrammarGender.Neuter));
	add(new Noun("vari", "i", "water", GrammarGender.Neuter));
	add(new Noun("Ak,khi", "i", "eye", GrammarGender.Neuter));
	add(new Noun("sp,pi", "i", "ghee", GrammarGender.Neuter));
	add(new Noun("d?dhi", "i", "curds", GrammarGender.Neuter));
	add(new Noun("Ac,ci", "i", "flame", GrammarGender.Neuter));
	add(new Noun("st,thi", "i", "thigh", GrammarGender.Neuter));
	
	// Neuter ending in u
	add(new Noun("ck,khu", "u", "eye", GrammarGender.Neuter));	
	add(new Noun("dhnu", "u", "bow", GrammarGender.Neuter));	
	add(new Noun("mdhu", "u", "honey", GrammarGender.Neuter));	
	add(new Noun("As,su", "u", "tear", GrammarGender.Neuter));	
	add(new Noun("jannau", "u", "knee", GrammarGender.Neuter));	
	add(new Noun("jnna,nnau", "u", "knee", GrammarGender.Neuter));	
	add(new Noun("daru", "u", "firewood", GrammarGender.Neuter));	
	add(new Noun("Am,bu", "u", "water", GrammarGender.Neuter));	
	add(new Noun("vsu", "u", "wealth", GrammarGender.Neuter));	
	add(new Noun("vt,thu", "u", "ground, base, site, estate", GrammarGender.Neuter));	
}
