var inquirer = require('inquirer');
var cards = require('./cards.js');
var questAndAns = require('./questandans.js').questions;
var a = [];
var current = 0;
var wrong = 0;
var right = 0; 

for (var i = 0; i <questAndAns.length; i++) {
	var quests = new cards.ClozeCards(
	questAndAns[i].full,
	questAndAns[i].cloze
	);
 a.push(quests);
};

function nextquestion(){
  inquirer.prompt([
    {
      type: "input",
      message: a[current].partial,
      name: "userGuess"
    }
  ]).then(function (answers){
    console.log("\n");
    console.log(current+1);
    if (answers.userGuess === a[current].cloze){
      console.log("that is correct!");
      right++;
      next();
    }
    else {
      console.log("that is wrong!");
      console.log("The Correct answer is: " + a[current].full);
      wrong++;
      next();
    }
  });
};
  function next(){
    console.log("next question!");
    console.log("\n");
    if(current < a.length-1){
      current++;
      nextquestion();
    }
    else {
      console.log("\n\nYour Game is Over!!!!!");
      console.log("You got " + right + " correct!");
      console.log("You got " + wrong + " wrong!");
      console.log("\n");
    }
  }
nextquestion();