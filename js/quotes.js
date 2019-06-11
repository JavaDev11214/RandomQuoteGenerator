const myButton = document.querySelector('.myButton');

function print(message) {
	const outputDiv = document.getElementById('container');
	outputDiv.innerHTML = message;
}
function print2(message) {
	const outputDiv2 = document.getElementById('container2');
	outputDiv2.innerHTML = message;
}


let quotes = [
  {
    quote: "If you do what you've always done, you'll get what you've always gotten",
    source: "-Tony Robbins",
    occupation: "Life Coach"	
  },
  {
    quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing",
    source: "-Aristotle",
    occupation: "Greek Philosopher"
  },
  {
    quote: "I am thankful for all of those who said NO to me. It's because of them I'm doing it myself",
    source: "-Albert Einstein",
	occupation: "Theoretical Physicist"
  },
  {
    quote: "If you don't build your dream, someone else will hire you to help them build theirs",
    source: "-Dhirubhai Ambani",
	occupation: "Business Tycoon"
	
  },
  {
    quote: "Always go with your passions. Never ask yourself if it's realistic or not.",
    source: "-Deepak Chopra",
	occupation: "Author & Public Speaker"
  }

];

function randomQuote() {
	const random = quotes[Math.floor(Math.random() * quotes.length)].quote;
	return random;
}
function sourceCitation(source, occupation) {
	const sourceOfQuote = source + ", " + occupation;
	return sourceOfQuote;
}


myButton.addEventListener('click', () => {
	if(randomQuote() === quotes[0].quote) {
		print("<h1>" + quotes[0].quote + "</h1>");
		print2("<p><em>" + sourceCitation(quotes[0].source, quotes[0].occupation) + "</em></p>");
	} else if(randomQuote() === quotes[1].quote) {
		print("<h1>" + quotes[1].quote + "</h1>");
		print2("<p><em>" + sourceCitation(quotes[1].source, quotes[1].occupation) + "</em></p>");
	} else if(randomQuote() === quotes[2].quote) {
		print("<h1>" + quotes[2].quote + "</h1>");
		print2("<p><em>" + sourceCitation(quotes[2].source, quotes[2].occupation) + "</em></p>");
	} else if(randomQuote() === quotes[3].quote) {
		print("<h1>" + quotes[3].quote + "</h1>");
		print2("<p><em>" + sourceCitation(quotes[3].source, quotes[3].occupation) + "</em></p>");
	} else if(randomQuote() === quotes[4].quote) {
		print("<h1>" + quotes[4].quote + "</h1>");
		print2("<p><em>" + sourceCitation(quotes[4].source, quotes[4].occupation) + "</em></p>");
	}
});
