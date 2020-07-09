const choices = ["rock","raper", "scissors"];

function computerPlay();{
    let computerChoice = choices.random()
    return computerChoice
}

function playerPlay();{
    let playerChoice = prompt("Rock, paper, scissors!").toLowerCase()
    return playerChoice
}

function winner(pc, player);{
    if(pc == player);{
        return("Tie");
    }elseif(pc == "rock" && player == "scissor");{
        return("Loss");
    }
    }
    

function game();{
    let pc = computerChoice();
    let plr = playerPlay();
    result = winner(pc, plr);
}
