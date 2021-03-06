'use strict';

let plrPts = 0 
let pcPts = 0

const choices = ["rock", "paper", "scissors"];

function getRandInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function computerPlay(){
    let rand = getRandInt(0,3);
    //console.log(rand)
    let computerChoice = choices[rand];
    return computerChoice;
}

function playerPlay(){
    let playerChoice = prompt("Rock, paper, scissors!"); // Unknown error
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function verInput(input){
    if(choices.includes(input) == true){
        return true;
    }else{
        return false;
    }
}

function winner(pc, player){
    let pcNum = choices.indexOf(pc);
    let playerNum = choices.indexOf(player);

    if(pcNum == playerNum){
        return "tie";
    }else if(pcNum-1 == playerNum){
        pcPts++;
        return "pc";
    }else{
        plrPts++;
        return "player";
    }
    }

function game(){
    let plr = playerPlay();
    let ver = verInput(plr);

    while (ver == false){
        alert("Incorrect input. Try again!")
        plr = playerPlay();
        ver = verInput(plr);
    }

    let pc = computerPlay();
    //console.log("Computer played: "+pc)
    let result = winner(pc, plr);
    
    if(result == "tie"){
        alert("You both tied! No points added.");
    }else if(result == "player"){
        let beat = plr+" beats "+pc;
        alert("You win, "+beat);
    }else if(result == "pc"){
        let beat = pc+" beats "+plr;
        alert("You lose, "+beat);
    }else{
        alert("Error");
    }
    alert("Game "+String(i)+": The score is now: \nPlayer "+String(plrPts) + " - " + String(pcPts) + " Computer");
}

let i = 0;

while(i < 5){
    i++;
    game();
}
