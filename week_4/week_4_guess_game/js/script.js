
function randomNum(min, max) {
	let point = 0;
	let totalPoint = 2;
	let count = 1;
	let luckyNum = Math.floor(Math.random() * ((max + 1) - min)) + min;
	alert("You are welcome to this guess Game");

	let userName = prompt("Please enter your username");

	alert("You are welcome " + userName + ". \n INSTRUCTIONS:\nThere is a total of two questions. \nYou get one point for each correctly guessed question. \nYou have to get the first question correctly to proceed to the next question. \nPress Enter/Ok to begin your game")

	let userGuess = parseInt(prompt("Please guess a number between 1 and 2"));
	
	if (userGuess == luckyNum) {
		point++;
		alert("Correct! \n You have been awarded " + point + " point \n\n Click ok to go to the next question");
		max++;
		
		let luckyNum1 = Math.floor(Math.random() * ((max + 1) - min)) + min;
		let userGuess1 = parseInt(prompt("Question 2: \n Please guess a number between 1 and 3"));
		if (userGuess1 == luckyNum1) {
			point++;
			alert("Correct! \n You have been awarded another point" + "\n You total score is " + point + "/" + totalPoint + " points");
		}else{
			alert("Incorrect! \n Thee correct answer is " + luckyNum1 + " \n Your total score is " + point + "/" + totalPoint + " points");
		}
			
	}
	else{
		alert("incorrect answer. \n The correct answer is " + luckyNum + "\n You have " + point + " points \n You cannot proceed to the next stage. Better luck next time");
	}
	
}

randomNum(1,2);

