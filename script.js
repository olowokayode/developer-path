
/*let value = true;
console.log(value, typeof(value));
let values = [1,2,3,4]; //(4) elements in the array
console.log(values[0]);
let cards = ["kings", "queens", "joker"]; //(3) elements in the array
cards.splice(0,2, "hearts")
console.log(cards);
to clear a variable, set it to null


let deck = [
		"Ace of Spades",
		"Ten of Hearts",
		"Three of Spades"
];

let playerCards = [deck[0], deck[2]];
console.log("Welcome to Blackjack!");

console.log("You are dealt:");
console.log("", deck[0]); //playerCards[0]
console.log("", deck[2]); //playerCards[1] 


let state = "FL";
let taxPercent = 7
if (state == "FL"){
	taxPercent = 9
};
console.log(taxPercent); */

/*let score = 1000;
if (score > 1000) {
	score = score + 100
}
else {
	console.log("no bonus")
};
console.log("score: ", score); */

// for loop explained

/*for (let i = 0; i < 5; i++) {
	console.log(i);
}; // 0 1 2 3 4  as soon as the condition (i<5) is complete, then the loop stops

//while loop explained
let count = 0;
while(count < 5) {
	console.log(count)
	count++;
}
// 0 1 2 3 4 as soon as the condition (i<5) is complete, then the loop stops
*/

//creating a function
/*function myFunction() {
	console.log("me");
}
myFunction(); */

//using an argument in function
/*function myFunction(message) {
	console.log(message + "world");
}
myFunction("hello!"); */

//using return statement
/*function myFunction(myNumber) {
	let number = (myNumber + 100);
	return number; //return variable value
}
 let result = myFunction(42) //console.log((myFunction42)) 142
console.log(result); //result will also give 142*/

//understanding objects
/*let people = {                         //inside the curly brackets are properties
	name: "John",
	age: 40,
	student: false
};
console.log(people.name);             //this logs out the property John
*/
//how to pass objects into functions
//note that functions have ability to change an object
/*function myName(me) {
	me.age = 50;
}
let me = {
	age: 40
};
myName(me);
console.log(me.age); */

//having objects inside arrays
/*let cards = [
		{
			suits: "Hearts",
			value: "Clubs"
		},

		{
			suits: "Spades",
			value: "Joker"
		}
];
console.log(cards[0].suits) //this logs out "Hearts" */

//built-in objects explained
//some include; math, date, string, number

/*var result = Math.random() * 52; //random returns a value between 0 and 1
result = Math.trunc(result) //trunc(truncate) removes decimal from the result

console.log(result); */

/*var result = new Date().toDateString(); 
console.log(result); // Wed May 01 2019*/

//programming for web pages
//DOM means Document Object Model: defines how data of a web page is organised and manipulated
//<head> can't contain content for a page, putting script tag there just slows down the loadng of page. Place scripts that impacts the render of the page at the end of the <body>
/*let textArea = document.getElementById('text-area'); // this accesses the <p> element
//textArea.innerText = "Hello!"; //this manipulates the <p> element content
let okButton = document.getElementById('ok-button');
okButton.addEventListener ('click', function () {
	textArea.innerText = "Hello, did you click me?"; 
});*/ //this manipulates the <button> element using 'click' and calls a function in the code block everytime the button is clicked
// removing and adding elements =>
let textArea = document.getElementById('text-area')
let okButton = document.getElementById('ok-button');
okButton.addEventListener ('click', function() {
	textArea.style.display = 'none'; 
})
