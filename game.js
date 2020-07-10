'use strict';

const choices = ["rock","paper", "scissors"];

function getRandInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function computerPlay(){
    let rand = getRandInt(0,3)
    //console.log(rand)
    let computerChoice = choices[rand]
    return computerChoice
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
    return;
    }
    

function game(){
    let plr = playerPlay();
    let ver = verInput(plr)

    while (ver == false){
        alert("Incorrect input. Try again!")
        plr = playerPlay();
        ver = verInput(plr)
    }

    let pc = computerPlay();
    //console.log("Computer played: "+pc)
    result = winner(pc, plr);
}

game()