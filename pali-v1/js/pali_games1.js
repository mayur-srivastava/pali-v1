var numberOfOptions = 4;
var PLUS = 10;
var MINUS = 5;
var wrongScoreDelta = 2;
var maxQueueSize = 20;
var score = 0
var pickFromWrongQueueProb = 0.2;
var nQuestion = 0;
var nCorrect = 0;
var timeTaken = 0;
var startTime = 0;
var endTime = 0;

var script = new PaliScript();
var wrongQueue = [];
var wrongScore = new Map();

var buttonClass = "w3-btn w3-medium w3-round w3-blue w3-padding-small w3-hover-blue";
var buttonCorrectClass = "w3-btn w3-medium w3-round w3-green w3-padding-small w3-hover-green";
var buttonWrongClass = "w3-btn w3-medium w3-round w3-red w3-padding-small w3-hover-red";

var levels = [50, 100, 200, 500, 1000, 10000];
var levelClass = "w3-btn w3-medium w3-round w3-khaki w3-padding-small w3-hover-khaki";
var levelSelectedClass = "w3-btn w3-medium w3-round w3-green w3-padding-small w3-hover-green";
var prevLevelId = null;

function getTimeMillis() {
	var d = new Date();
	return d.getTime();
}

function resetPlusMinus() {
	plus = PLUS;
	minus = MINUS;
}

function doubleToStrRounded(num) {
	return parseFloat(Math.round(num * 10) / 10).toFixed(1);
}

function drawScore() {
	var n = nQuestion > 0 ? nQuestion : 1;
	var scoreElement = document.createElement("txt");
	scoreElement.innerHTML = "<font color=\"gray\" size=\"3\">" 
		+ "[score:" + score 
		+ " avg:" + doubleToStrRounded(score / n) + "] " 
		+ " [correct: " + doubleToStrRounded(nCorrect / n * 100) + "% (" + nCorrect + "/" + n + ")]" 
		+ " [time (sec): " + doubleToStrRounded(timeTaken / 1000)
		+ " avg: " + doubleToStrRounded(timeTaken / (n * 1000)) + "] "
		+ "</font>"
	clearChildrenAndGet("score").appendChild(scoreElement);
}

function findOccurences(array, search) {
	var count = array.reduce(function(n, val) {
		return n + (val === search);
	}, 0);
	return count;
}

function correctAnswer(expected, delta) {
	var elem = document.getElementById("ans-" + expected);
	elem.setAttribute("class", buttonCorrectClass);
	elem.innerHTML = elem.innerHTML + " " + (delta > 0 ? "+" + delta : delta) + " points";
	
	score += delta;
	
	var prevWrongScore = wrongScore.get(expected);
	if (prevWrongScore != null) {
		var newWrongScore = prevWrongScore - 1;
		if (newWrongScore == 0) {
			var numOccurence = findOccurences(wrongQueue, expected);
			if (numOccurence == 1) {
				wrongScore.delete(expected);
			} else {
				wrongScore.set(expected, wrongScoreDelta);
			}
			var index = wrongQueue.indexOf(expected);
			if (index >= 0) {
				wrongQueue.splice(index, 1);
			}
		} else {
			wrongScore.set(expected, newWrongScore);
		}
	}
	
	nCorrect++;
	endTime = getTimeMillis();
	timeTaken += (endTime - startTime);
	
	setTimeout(ask, 500);
}

function wrongAnswer(selected, expected, delta) {
	var elem = document.getElementById("ans-" + selected);
	elem.setAttribute("class", buttonWrongClass);
	elem.setAttribute("disabled", true);
	elem.innerHTML = elem.innerHTML + " " + delta + " points";
	
	score += delta;
	minus += 5;
	nQuestion++;
	
	wrongQueue.push(expected);
	wrongScore.set(expected, wrongScoreDelta);
	
	// Prune the queue
	while (wrongQueue.length > maxQueueSize) {
		wrongQueue.shift();
	}
}

function check(selected, expected) {
	nQuestion++;
	if (selected == expected) {
		correctAnswer(expected, plus)
	} else {
		wrongAnswer(selected, expected, -minus);
	}
}

function getQuestion() {
	return randomFn(wrongQueue);
}

function getButtonText(txt) {
	return "<b><font size=\"10\">&nbsp;&nbsp;&nbsp;" 
		+ txt
		+ "&nbsp;&nbsp;&nbsp;</font></b>";
}

function getQuestionIndex(queue) {
	var bound = Math.min(1, pickFromWrongQueueProb + logn(queue.length + 1, maxQueueSize) / 2);
	if (queue.length > 0 && Math.random() < bound) { // ${bound}% of times, use words from wrong answers
		return getRandomInt(0, queue.length);
	} else {
		return -1;
	}
}

function setLevels() {
	var n = getMaxQuestions();
	
	var buttonsHTML = "";
	for (var l = 0; l < levels.length; l++) {
		var level = levels[l];
		
		var levelStr = "Level " + (l + 1) + ": " + level;

		buttonsHTML += "<button id=\"level_index_" + l + "\" class=\"" + levelClass + "\" onclick='onLevel(" 
			+ l 
			+ ")'>" 
			+ levelStr 
			+ "</button>&nbsp;";
		
		if (level > n) {
			break;
		}
	}
	
	var buttons = document.createElement("div");
	buttons.innerHTML = buttonsHTML;
	clearChildrenAndGet("levels").appendChild(buttons);
	
	onLevel(0);
}

function onLevel(level_index) {
	var levelId = "level_index_" + level_index;
	
	if (levelId != prevLevelId) {
		console.log("Changed level to " + levels[level_index]);

		var elem = document.getElementById(levelId);
		elem.setAttribute("class", levelSelectedClass);
	
		if (prevLevelId != null) {
			var pElem = document.getElementById(prevLevelId);
			pElem.setAttribute("class", levelClass);
		}
		prevLevelId = levelId;
	
		setView(Math.min(levels[level_index], getMaxQuestions()));
		ask();
	}
}

var ask = function() {
	resetPlusMinus();
    drawScore();
	
    var answer = getQuestion();
	
	var options = [answer];
    for (var i = 1; i < numberOfOptions; i++) {
	  while (true) {
	    var optioni = randomFn([]);
		
		var shouldRetry = false;
		for (var j = 0; j < i; j++) {
			var optionj = options[j];
			if (optioni.getBase() == optionj.getBase() || optioni.meanings == optionj.meanings) {
				shouldRetry = true;
				break;
			}
		}
		if (shouldRetry) {
			continue;
		}
		
		if (optioni.getBase() != answer.getBase() && optioni.meanings != answer.meanings) {
	      options.push(optioni);
		  break;
		}
	  }
	}
	options.shuffle();
  
    var optionsElement = clearChildrenAndGet("options");
    for (var i = 1; i <= numberOfOptions; i++) {
		var optioni = options[i - 1];
		
		txt = "<b><font size=\"10\">&nbsp;&nbsp;&nbsp;" 
			+ getButtonText(getAnswer(optioni))
			+ "&nbsp;&nbsp;&nbsp;</font></b>";
		
		var buttoni = document.createElement("div");
		buttoni.innerHTML = "<br><button id=\"ans-" + optioni.getBase() + "\" class=\"" + buttonClass + "\" onclick='check(\"" 
			+ optioni.getBase() 
			+ "\", \"" 
			+ answer.getBase() + "\")'>" 
			+ txt 
			+ "</button><br><br>";
		optionsElement.appendChild(buttoni);
    }	
  
	//
	// Question
	//
	resetPlusMinus();
	question(answer);
	
	startTime = getTimeMillis();
}
