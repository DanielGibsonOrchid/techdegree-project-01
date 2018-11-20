/*
Function that generates a random number between 0 and arrays length - 1 (useful for index numbers)
It uses that random number to return a random index number of an object from the 'quotes' array
*/
function getRandomQuote(array){
	var randomNumber = Math.floor(Math.random() * array.length);
	return array[randomNumber];
}

/*
Function that prints a random quote to the HTML page:
1- Calls getRandomQuote function using the 'quotes' array and stores it in variable 'holdQuote'
2- Creates an empty string variable that stores HTML code and the main two properties of the quote object
3- Conditional statements to determine if the quote object has two optional properties and stores extra code accordingly
4- Closes the string variable with HTML tag
5- Sends the string variable holding all of the HTML code and quote object properties to the .innerHTML div called 'quote-box'
*/
function printQuote (){
	var holdQuote = getRandomQuote(quotes);
	var string = '';
	string = '<p class="quote">' + holdQuote.quote + '</p><p class="source">' + holdQuote.source;
	if (holdQuote.hasOwnProperty('topic')) {
		string += '<span class="citation">' + holdQuote.topic + '</span>';
	}
	if (holdQuote.hasOwnProperty('year')) {
		string += '<span class="year">' + holdQuote.year + '</span>';	
	}
	string += '</p>'
	document.getElementById('quote-box').innerHTML = string;

	//random colour generator to change the background color everytime 'printQuote' function is called
	function randomColour() {
    return Math.floor(Math.random() * 256);
	}
	var red = randomColour();
	var green = randomColour();
	var blue = randomColour();
	var rColour = 'rgb(' + red + ',' + green + ',' + blue + ')';
	document.body.style.backgroundColor = rColour;
}

//Calls the 'printQuote' function
printQuote();

// Call 'printQuote' function after 20 seconds
setInterval('printQuote()', 20000);

//Button 'loadQuote' when clicked to call function 'printQuote'
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
