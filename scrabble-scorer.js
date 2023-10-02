// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) { //create function
	word = word.toUpperCase();  //assures case
	let score = 0; //mutable variable to output points as loop crawls
 
	for (let i = 0; i < word.length; i++) { //iterative loop crawling word
 
	  for (const pointValue in oldPointStructure) { //iterative loop crawling score object keys
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			score += Number(oldPointStructure[pointValue]);
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word:");
   return word;
};



let simpleScorer = {
   'name' : 'Simple Score',
   'description' : 'Each letter is worth 1 point.',
   scoringFunction : function(word){
   let score = 0;
   //let scoreOutput = '';
   for (let i=0; i < word.length; i++){
      score++;
      }
   //scoreOutput = `${word} is worth ${score} points in simple score`;
   return Number(score);
   }
};

let vowelBonusScorer = {
   'name' : 'Bonus Vowels',
   'description' : 'Vowels are worth 3 pts, consonants are 1pt.',
   scoringFunction : function(word){
   word = word.toUpperCase().split('');
   let arrVowels = ['A','E','I','O','U','Y'];
   let score = 0;
   for(let i=0; i<word.length; i++){
     arrVowels.includes(word[i]) ? score+=3 : score++;
   }
   return Number(score);
   }
};

let scrabbleScorer = {
   'name' : 'Scrabble',
   'description' : 'The traditional scoring algorithm',
   scoringFunction : function(word) { //create function
      word = word.toUpperCase().split('');  //assures case, splits into array
      let score = 0; //mutable variable to output points as loop crawls
    
      for (let i = 0; i < word.length; i++) { //iterative loop crawling word
    
        for (const pointValue in oldPointStructure) { //iterative loop crawling score object keys
    
          if (oldPointStructure[pointValue].includes(word[i])) {
            score += Number(`${pointValue}`);
          }
    
        }
      }
      return score;
    }

};

const scoringAlgorithms = [simpleScorer, vowelBonusScorer, scrabbleScorer];

function scorerPrompt() {
   let scoreChoice = input.question(`
   0)Simple Score
   1)Bonus Vowels
   2)Traditional Scrabble
   Which Scoring algorithm would you like?:`);
   return scoringAlgorithms[scoreChoice];
}

function transform(oldScore) {
   let newScore = {}; //copy being returned later
   return newScore;
};

let newPointStructure;

function runProgram() {
   let userWord = initialPrompt();
   let scoreChoice = scorerPrompt();
   console.log(`the Score for ${userWord} is ${scoreChoice.scoringFunction(userWord)}!`);
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
