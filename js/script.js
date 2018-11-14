/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

var randomNumber;

function getRandomQuote(quotes){
	randomNumber = Math.floor(Math.random() * quotes.length) + 1;
	return quotes[randomNumber];
}



