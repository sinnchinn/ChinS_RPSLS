// let player1 = "";
// let player2 = "";
let score1 = 0;
let score2 = 0;
let wins1 = 0;
let wins2 = 0;

//gameLogic take in to parameters 
//These parameters are called within app.js 

const gameLogic = (player1, player2) => {
    console.log(player1, player2)
    if (player1 == "Rock" && player2 == "Paper") {
        alert("sorry!! you chose rock, player 2 chose paper. paper beats rock! player 2 scores.")
        score2++;
    } else if (player1 == "Rock" && player2 == "Rock") {
        alert("it's a tie! no one scores.")
    } else if (player1 == "Rock" && player2 == "Scissors") {
        alert("yay!! you chose rock, player 2 chose scissors. rock beats scissors! you scored.");
        score1++;
    } else if (player1 == "Rock" && player2 == "Lizard") {
        alert("yay!! you chose rock, player 2 chose lizard. rock beats lizard! you scored.");
        score1++;
    } else if (player1 == "Rock" && player2 == "Spock") {
        alert("sorry!! you chose rock, player 2 chose spock. spock beats rock! player 2 scores.");
        score2++;
    } else if (player1 == "Paper" && player2 == "Rock") {
        alert("yay!! you chose paper, player 2 chose rock, paper beats rock! you scored.")
        score1++;
    } else if (player1 == "Paper" && player2 == "Paper") {
        alert("it's a tie! no one scores.")
    } else if (player1 == "Paper" && player2 == "Scissors") {
        alert("sorry!! you chose paper, player 2 chose scissors. scissors beats paper! player 2 scores.");
        score2++;
    } else if (player1 == "Paper" && player2 == "Lizard") {
        alert("sorry!! you chose paper, player 2 chose lizard. lizard beats paper! player 2 scores.");
        score2++;
    } else if (player1 == "Paper" && player2 == "Spock") {
        alert(" yay!! you chose paper, player 2 chose spock. paper beats spock! you scored.");
        score1++;
    } else if (player1 == "Scissors" && player2 == "Rock") {
        alert("you chose scissors, player 2 chose rock. rock beats scissors! player 2 scores.")
        score2++;
    } else if (player1 == "Scissors" && player2 == "Paper") {
        alert("yay!! you chose scissors, player 2 chose paper. scissors beats paper! you scored.")
        score1++;
    } else if (player1 == "Scissors" && player2 == "Scissors") {
        alert("it's a tie! no one scores");
    } else if (player1 == "Scissors" && player2 == "Lizard") {
        alert("yay!! you chose scissors, player 2 chose lizard. scissors beats lizard! you scored.");
        score1++;
    } else if (player1 == "Scissors" && player2 == "Spock") {
        alert("sorry!! you chose scissors, player 2 chose spock. spock beats scissors! player 2 scores.");
        score2++;
    } else if (player1 == "Lizard" && player2 == "Rock") {
        alert("sorry!! you chose lizard, player 2 chose rock. rock beats lizard! player 2 scores.");
        score2++;
    } else if (player1 == "Lizard" && player2 == "Paper") {
        alert("yay!! you chose lizard, player 2 chose paper. lizard beats paper! you scored.");
        score1++;
    } else if (player1 == "Lizard" && player2 == "Scissors") {
        alert("sorry!! you chose lizard, player 2 chose scissors. scissors beats lizard! player 2 scores.");
        score2++;
    } else if (player1 == "Lizard" && player2 == "Lizard") {
        alert("it's a tie! no one scores");
    } else if (player1 == "Lizard" && player2 == "Spock") {
        alert("yay!! you chose lizard, player 2 chose spock. lizard beats spock! you scored.");
        score1++;
    } else if (player1 == "Spock" && player2 == "Rock") {
        alert("yay!! you chose spock, player 2 chose rock. spock beats rock! you scored.")
        score1++;
    } else if (player1 == "Spock" && player2 == "Paper") {
        alert("sorry!! you chose spock, player 2 chose spock. paper beats spock! player 2 scores.")
        score2++;
    } else if (player1 == "Spock" && player2 == "Scissors") {
        alert("yay!! you chose spock, player 2 chose scissors. spock beats scissors! you scored.");
        score1++;
    } else if (player1 == "Spock" && player2 == "Lizard") {
        alert("sorry!! you chose spock, player 2 chose lizard. lizard beats spock! player 2 scores.");
        score2++;
    } else if (player1 == "Spock" && player2 == "Spock") {
        alert("it's a tie! no one scores");
    } else {
            console.log("error!") ;
    }
}

const scores = (score1, score2) => {
    if (score1 > score2) {

    }
}

export { gameLogic, score1, score2}

