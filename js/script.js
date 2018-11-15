/*
Function that generates a random number between 0 and arrays length - 1 (useful for index numbers)
Uses that random number to return a random index number of an object from the 'quotes' array
*/

var randomNumber;
var holdQuote;

function getRandomQuote(array){
	randomNumber = Math.floor(Math.random() * array.length);
	return array[randomNumber];
}
//console.log (getRandomQuote(quotes).quote)



/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/


function printQuote (){
	holdQuote = getRandomQuote(quotes).quote;
	var string = 
		'<p class="quote">' [quote here] '</p>'
		'<p class="source">' [source here]
			'<span class="topic">' [topic here] '</span>'
		'</p>';

}

