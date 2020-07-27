'use strict';

let plrPts = 0 
let pcPts = 0

const choices = ["rock", "paper", "scissors"];

function updateScores(result, pc, plr){
    const getAns = document.querySelector("#results")

    const score = getAns.querySelector("#score")
    const win = getAns.querySelector("#winner")
    const info = getAns.querySelector("#info")

    if(result == "tie"){
        win.textContent = "You tied";
        info.textContent = plr +" ties with "+ pc
    }else if(result == "player"){
        win.textContent = "You win"
        info.textContent = plr +" beats "+ pc;
    }else if(result == "pc"){
        win.textContent= "You lost"
        info.textContent = pc +" beats "+ plr;
    }else{
        alert("Error");
    }
    score.textContent = "Player "+String(plrPts) + " - " + String(pcPts) + " Computer"
}

function getRandInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function computerPlay(){
    let rand = getRandInt(0,3);
    //console.log(rand)
    let computerChoice = choices[rand];
    return computerChoice;
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

function game(plr){

    let pc = computerPlay();
    //console.log("Computer played: "+pc)
    let result = winner(pc, plr);
    updateScores(result, pc, plr)
}

const btnSelectors = document.querySelector("#choice");
btnSelectors.addEventListener('click', onClickMain)

function onClickMain(event){
    if(event.target.id != "choice"){
        game(event.target.id)
    }
    if(plrPts >= 5 || pcPts >= 5){
        console.log("ended")
    }

}
