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
    return playerChoice
}

function winner(pc, player){
    return
    }
    

function game(){
    let pc = computerPlay();
    //console.log("Computer played: "+pc)
    let plr = playerPlay();

    result = winner(pc, plr);
}

game()