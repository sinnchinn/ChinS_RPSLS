import { gameLogic, score1, score2} from './gamelogic.js'

let player1 = "";
let player2 = "";
let bestOf1v1 = document.getElementById("bestOf1v1");
let bestOf3v1 = document.getElementById("bestOf3v1");
let bestOf5v1 = document.getElementById("bestOf5v1");
let bestOf1Cpu = document.getElementById("bestOf1Cpu");
let bestOf3Cpu = document.getElementById("bestOf3Cpu");
let bestOf5Cpu= document.getElementById("bestOf5Cpu");

let matchNumber = document.getElementById("matchNumber");
let howManyCpu = document.getElementById("howManyCpu");
let scores1V1 = document.getElementById("scores1V1");
let scoreCpu = document.getElementById("scoreCpu");
let matchWins = document.getElementById("matchWins");
let playerCpuWins = document.getElementById("playerCpuWins")

let remove1Multi = document.getElementById("remove1Multi");
let remove2Multi = document.getElementById("remove2Multi");
let remove3Multi = document.getElementById("remove3Multi");
let remove4Multi = document.getElementById("remove4Multi");
let remove5Multi = document.getElementById("remove5Multi");
let remove6Multi = document.getElementById("remove6Multi");
let remove7Multi = document.getElementById("remove7Multi");
let remove8Multi = document.getElementById("remove8Multi");
let remove9Multi = document.getElementById("remove9Multi");


let removeCpu1 = document.getElementById("removeCpu1");
let removeCpu2 = document.getElementById("removeCpu2");
let cpuRemove1 = document.getElementById("cpuRemove1");
let cpuRemove2 = document.getElementById("cpuRemove2");
let cpuRemove3 = document.getElementById("cpuRemove3");
let cpuRemove4 = document.getElementById("cpuRemove4");



let rockP1 = document.getElementById("rockP1");
let paperP1 = document.getElementById("paperP1");
let scissorsP1 = document.getElementById("scissorsP1");
let lizardP1 = document.getElementById("lizardP1");
let spockP1 = document.getElementById("spockP1");

let rockP2 = document.getElementById("rockP2");
let paperP2 = document.getElementById("paperP2");
let scissorsP2 = document.getElementById("scissorsP2");
let lizardP2 = document.getElementById("lizardP2");
let spockP2 = document.getElementById("spockP2");

let rockVsCpu = document.getElementById("rockVsCpu")
let paperVsCpu = document.getElementById("paperVsCpu")
let scissorsVsCpu = document.getElementById("scissorsVsCpu")
let lizardVsCpu = document.getElementById("lizardVsCpu")
let spockVsCpu = document.getElementById("spockVsCpu")

let playerWin = document.getElementById("playerWin");
let matchStart = document.getElementById("matchStart");
let playAgain = document.getElementById("playAgain");
let backHome = document.getElementById("backHome");

async function ApiCall(){
    const promise = await fetch("https://rpslsapi.azurewebsites.net/RPSLS")

    const data = await promise.text();

    return data;

}

if(location.pathname.includes("opponent")){
    let multiplayer = document.getElementById("multiplayer");
    let computerPlayer = document.getElementById("computerPlayer");

    multiplayer.addEventListener('click', function(e){
        localStorage.setItem("player", "multi");
    });

    computerPlayer.addEventListener('click', function(e){
        localStorage.setItem("player", "single");
    });
};

if(location.pathname.includes("choosematch1v1")){
    
    bestOf1v1.addEventListener('click', function(e){
        localStorage.setItem("mode", "one")
    });

    bestOf3v1.addEventListener('click', function(e){
        localStorage.setItem("mode", "five")
    });

    bestOf5v1.addEventListener('click', function(e){
        localStorage.setItem("mode", "seven")
    });
}

if(location.pathname.includes("choosematch1vcpu")){
    
    bestOf1Cpu.addEventListener('click', function(e){
        localStorage.setItem("mode", "one")
    });

    bestOf3Cpu.addEventListener('click', function(e){
        localStorage.setItem("mode", "five")
    });

    bestOf5Cpu.addEventListener('click', function(e){
        localStorage.setItem("mode", "seven")
    });
}

function resetGame(){
    matchStart.remove();
    playAgain.classList.remove("d-none");
    backHome.classList.remove("d-none");
    remove1Multi.remove();
    remove2Multi.remove();
    remove3Multi.remove();
    remove4Multi.remove();
    remove5Multi.remove();
    remove6Multi.remove();
    remove7Multi.remove();
    remove8Multi.remove();
    remove9Multi.remove();
    matchWins.remove();
}

function resetGameCpu(){
    removeCpu1.remove();
    removeCpu2.remove();
    cpuRemove1.remove();
    cpuRemove2.remove();
    cpuRemove3.remove();
    cpuRemove4.remove();
    howManyCpu.remove();
    playAgain2.classList.remove("d-none");
    backHome2.classList.remove("d-none");
}

if(location.pathname.includes("1vcpumatch")){

    if(localStorage.getItem("mode") == "one"){
        matchNumber.innerText = "best of 1";
        howManyCpu.innerHTML = "beat your opponent once to win!"
    } else if(localStorage.getItem("mode") == "five"){
        matchNumber.innerText = "best of 5";
        howManyCpu.innerHTML = "beat your opponent three times to win!"
    } else if(localStorage.getItem("mode") == "seven"){
        matchNumber.innerText = "best of 7";
        howManyCpu.innerHTML = "beat your opponent five times to win!"
    }

    rockVsCpu.addEventListener('click',  async function(e){
        if(localStorage.getItem("player") == "single"){
            let cpuAnswer = await ApiCall();
            gameLogic("Rock", cpuAnswer)
            scoreCpu.innerText = `score: ${score1}/${score2}`;
        };

        if((localStorage.getItem("mode") == "one" && score1 == 1) || (localStorage.getItem("mode") == "one" && score2 == 1)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 beats the computer! ";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer demolishes player 1!";
                resetGameCpu();

            }
        }

        if((localStorage.getItem("mode") == "five" && score1 == 3) || (localStorage.getItem("mode") == "five" && score2 == 3)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 demolishes the computer!";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer slays player 1!";
                resetGameCpu();
            }
        }

        if((localStorage.getItem("mode") == "seven" && score1 == 5) || (localStorage.getItem("mode") == "seven" && score2 == 5)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 wrecks the computer!";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer beats player 1!";
                resetGameCpu();
            }
        }

    });

    paperVsCpu.addEventListener('click',  async function(e){
        if(localStorage.getItem("player") == "single"){
            let cpuAnswer = await ApiCall();
            gameLogic("Paper", cpuAnswer)
            scoreCpu.innerText = `score: ${score1}/${score2}`;
            console.log(cpuAnswer);
        };

        if((localStorage.getItem("mode") == "one" && score1 == 1) || (localStorage.getItem("mode") == "one" && score2 == 1)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 wins triumphs over the computer!";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer demolishes player 1!";
                resetGameCpu();
            }
        }

        if((localStorage.getItem("mode") == "five" && score1 == 3) || (localStorage.getItem("mode") == "five" && score2 == 3)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 gains victory against the computer!";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer runs circles around player 1!";
                resetGameCpu();
            }
        }

        if((localStorage.getItem("mode") == "seven" && score1 == 5) || (localStorage.getItem("mode") == "seven" && score2 == 5)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 salm dunks the computer!";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer walks away with the victory against player 1!";
                resetGameCpu();
            }
        }
    });

    scissorsVsCpu.addEventListener('click',  async function(e){
        if(localStorage.getItem("player") == "single"){
            let cpuAnswer = await ApiCall();
            gameLogic("Scissors", cpuAnswer)
            scoreCpu.innerText = `score: ${score1}/${score2}`;
        };

        if((localStorage.getItem("mode") == "one" && score1 == 1) || (localStorage.getItem("mode") == "one" && score2 == 1)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 secures the W against the computer!";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer got the better of player 1!";
                resetGameCpu();
            }
        }

        if((localStorage.getItem("mode") == "five" && score1 == 3) || (localStorage.getItem("mode") == "five" && score2 == 3)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 overwhelms the computer with victory!";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer prevails over player 1!";
                resetGameCpu();
            }
        }

        if((localStorage.getItem("mode") == "seven" && score1 == 5) || (localStorage.getItem("mode") == "seven" && score2 == 5)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 surpasses the computer!";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer crushes player 1!";
                resetGameCpu();
            }
        }
    });

    lizardVsCpu.addEventListener('click',  async function(e){
        if(localStorage.getItem("player") == "single"){
            let cpuAnswer = await ApiCall();
            gameLogic("Lizard", cpuAnswer)
            scoreCpu.innerText = `score: ${score1}/${score2}`;
        };

        if((localStorage.getItem("mode") == "one" && score1 == 1) || (localStorage.getItem("mode") == "one" && score2 == 1)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 wins against computer!";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer wins against player 1!";
                resetGameCpu();
            }
        }

        if((localStorage.getItem("mode") == "five" && score1 == 3) || (localStorage.getItem("mode") == "five" && score2 == 3)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 transcends over the computer!";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer overpowers player 1!";
                resetGameCpu();
            }
        }

        if((localStorage.getItem("mode") == "seven" && score1 == 5) || (localStorage.getItem("mode") == "seven" && score2 == 5)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 demolishes the computer!";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer defeats player 1!";
                resetGameCpu();
            }
        }
    });

    spockVsCpu.addEventListener('click',  async function(e){
        if(localStorage.getItem("player") == "single"){
            let cpuAnswer = await ApiCall();
            gameLogic("Spock", cpuAnswer)
            scoreCpu.innerText = `score: ${score1}/${score2}`;
        };

        if((localStorage.getItem("mode") == "one" && score1 == 1) || (localStorage.getItem("mode") == "one" && score2 == 1)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 annihalates the computer!";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer got the better of player 1!";
                resetGameCpu();
            }
        }

        if((localStorage.getItem("mode") == "five" && score1 == 3) || (localStorage.getItem("mode") == "five" && score2 == 3)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 buries the computer!";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer outfights player 1!";
                resetGameCpu();
            }
        }

        if((localStorage.getItem("mode") == "seven" && score1 == 5) || (localStorage.getItem("mode") == "seven" && score2 == 5)){
            if(score1 > score2){
                playerCpuWins.innerText = "player 1 outshines the computer!";
                resetGameCpu();
            } else {
                playerCpuWins.innerText = "computer sweeps player 1!";
                resetGameCpu();
            }
        }
    });
}



if(location.pathname.includes("1v1match")){

    if(localStorage.getItem("mode") == "one"){
        matchNumber.innerText = "best of 1";
        matchWins.innerHTML = "beat your opponent once to win!"
    } else if(localStorage.getItem("mode") == "three"){
        matchNumber.innerText = "best of 3";
        matchWins.innerHTML = "beat your opponent twice to win!"
    } else if(localStorage.getItem("mode") == "five"){
        matchNumber.innerText = "best of 5";
        matchWins.innerHTML = "beat your opponent three times to win!"
    };

    rockP1.addEventListener('click', function(e){
        player1 = "Rock";
    });

    paperP1.addEventListener('click', function(e){
        player1 = "Paper";
    })

    scissorsP1.addEventListener('click', function(e){
        player1 = "Scissors";
    })
    
    lizardP1.addEventListener('click', function(e){
        player1 = "Lizard";
    })
    
    spockP1.addEventListener('click', function(e){
        player1 = "Spock";
    })

    rockP2.addEventListener('click', function(e){
        player2 = "Rock";
    })

    paperP2.addEventListener('click', function(e){
        player2 = "Paper";
    })

    scissorsP2.addEventListener('click', function(e){
        player2 = "Scissors";
    })

    lizardP2.addEventListener('click', function(e){
        player2 = "Lizard";
    })

    spockP2.addEventListener('click', function(e){
        player2 = "Spock";
    });

    matchStart.addEventListener('click', function(e){
        if(localStorage.getItem("player") == "multi"){
            gameLogic(player1, player2)
            scores1V1.innerText = `score: ${score1}/${score2}`;
        };
    
        if((localStorage.getItem("mode") == "one" && score1 == 1) || (localStorage.getItem("mode") == "one" && score2 == 1)){
            if(score1 > score2){
                playerWin.innerText = "player 1 runs circles around player 2! ";
                resetGame();
            } else {
                playerWin.innerText = "player 2 got the better of player 1!";
                resetGame();
    
            }
        }
    
        if((localStorage.getItem("mode") == "five" && score1 == 3) || (localStorage.getItem("mode") == "five" && score2 == 3)){
            if(score1 > score2){
                playerWin.innerText = "player 1 secures the victory over player 2!";
                resetGame();
            } else {
                playerWin.innerText = "player 2 overthrows player 1!";
                resetGame();
            }
        }
    
        if((localStorage.getItem("mode") == "seven" && score1 == 5) || (localStorage.getItem("mode") == "seven" && score2 == 5)){
            if(score1 > score2){
                playerWin.innerText = "player 1 gains victory over player 2!";
                resetGame();
            } else {
                playerWin.innerText = "player 2 takes the prize over player 1!";
                resetGame();
            }
        }
    })

    
};



