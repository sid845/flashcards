var inquirer = require('inquirer');
var ClozeCard = require('./cards.js');
var questions = require('./questandans.js').questions;
var qAsked = [];
var current = 0;
var wrong = 0;
var right = 0; 
for (var i = 0; i <questions.length; i++) {
var quests = new ClozeCard.ClozeCard(
	questions[i].full,
	questions[i].cloze
	);
qAsked.push(quests);
};
function ask(){
inquirer.prompt([
		{
		type: "input",
		message: qAsked[current].partial,
		name: "userGuess"
	}
	]).then(function (answers){
		console.log("\n");
		console.log(current)
		if (answers.userGuess === qAsked[current].cloze){
			console.log("that is correct!");
			right++;
			next();

		}else {
			console.log("that is wrong!");
			console.log("The Correct answer is: " + qAsked[current].full);
			wrong++;
			next();
		}

	});

};

		function next(){
		console.log("next question!");
		console.log("\n");
		if(current < qAsked.length-1){
			current++;
			ask();

		} else {
			console.log("Your Game is Over!!!!!");
			console.log("You got " + right + " correct!");
			console.log("You got " + wrong + " wrong!");
			console.log("\n");

		inquirer.prompt([
				{
					type: "confirm",
					message: "Do you want to try again?",
					name: "replay"
				}

			]).then(function (answers) {
				if (answers.replay){
					current = 0;
					wrong = 0;
					right = 0;
					ask();
				} else {
					console.log("Try again next time!");
				}
		
			});
		}
	}

ask();