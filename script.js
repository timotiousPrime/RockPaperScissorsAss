const result = '';
const para = document.querySelector('.userChoice');
const para2 = document.querySelector('.pcChoice');
const choices = ['rock', 'paper', 'scissors'];
const para3 = document.querySelector('.results');
const para4 = document.querySelector('.rounds');
const para5 = document.querySelector('.scoreTally')


// Ask user how many rounds they want to play
let rounds = prompt('How many rounds are we playing to?', 1);

// Generates a random choice for the pc from the list of choices
 function getPcChoice(choices) {
     return choices[Math.floor(Math.random() * choices.length)];
 }

 function getUserChoice() {
     let userChoice = prompt('Please enter your choice between rock, paper or scissors', '');
    return userChoice
 }



// Compares the users choice with the pc's choice and updates the results variable
function compareChoices(userChoice, pcChoice) {
    if (userChoice === pcChoice) {
        return 'draw';
    } else if (userChoice === 'rock' && pcChoice === 'paper') {
        return 'lose';
    } else if (userChoice === 'rock' && pcChoice === 'scissors') {
        return 'win';
    } else if (userChoice === 'paper' && pcChoice === 'rock') {
        return 'win';
    } else if (userChoice === 'paper' && pcChoice === 'scissors') {
        return 'lose';
    } else if (userChoice === 'scissors' && pcChoice === 'rock') {
        return 'lose';
    } else if (userChoice === 'scissors' && pcChoice === 'paper') {
        return 'win'
    }
}

function game(rounds){
    // Declare how many rounds we'll be playing
    para4.textContent = `Best out of ${rounds} rounds is the champion. I hope you're ready!`;

    // Asks user for their choice and saves it in lowercase in a new variable
    userChoice = getUserChoice()

    // Changes case of user's choice
    userChoice = userChoice.toLowerCase();

    // Stores the pc's choice in a variable
    pcChoice = getPcChoice(choices);

    // Updates the <p> element with the players choices
    para.textContent = `You chose ${userChoice}.`;
    para2.textContent = `The computer chose ${pcChoice}.`

    //Print the winner
    para3.textContent = `You ${compareChoices(userChoice, pcChoice)} this round.`

    return compareChoices(userChoice, pcChoice)
}

let gameResult = game(rounds)

let winCount = 0;
let drawCount = 0;
let lossCount = 0;

for (let i=1; i <= rounds; i++, game(rounds)) {
    let gamesPlayed = i;
    console.log(gamesPlayed);
    console.log(gameResult)
    scoreCount(gameResult)
    para5.textContent = `win count is ${winCount}, draw count is ${drawCount} and loss count is ${lossCount}`;
}

function scoreCount(gameResult) {
 //count wins
 if (gameResult === 'win') {
     return winCount += 1;
 } else if (gameResult === 'lose') {
     return lossCount += 1;
 } else if (gameResult === 'draw'){
     return drawCount += 1;
 }
}
