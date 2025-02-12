/*
input would be rock paper or scissors from both the human and computer
output is who won
the game has 5 rounds and a score tracker
whoever get a higher score wins
Init the choice element reveal for both of them
Init the score element for computer and user
Init the status element
Init roundCount variable
Init a function to get the computer choice getComputerChoice()
    generate a random number between 1 and 3
    reference rock scissors and paper using the numbers
    cases paper 1 , scissors 2, rock 3
    Return the string

Init a variable for the buttons on the page
Init a function to get the player choice getPlayerChoice()
    Return the button textcontent

Init a function to play the round playRound(player,computer )
    check the round count first if less or equal to 5
    otherwise
    use 3 switch cases for who won

    write the choice of the player to the player reveal element 
    write the choice of the computer to the computer reveal element 

    if player = computer 
    status element is "Tie"
        return 


    if computer is rock
        if player is paper
            player score increase by 1
                status element is "player scores"
        if player is scissors
            computer score incerase by 1
                status element is "computer scores"

    if computer is paper
        if player is rock
            computer score increase by 1
                status element is "computer scores"

        if player is scissors
            player score incerase by 1
                status element is "player scores"

    if computer is scissors
        if player is paper
            computer score increase by 1
        if player is rock
            player score incerase by 1
                status element is "player scores"

    increase the round count by 1













*/

let computerScore = 0;
let playerScore = 0;
let computerScoreElement = document.querySelector(".computerScore")
let playerScoreElement = document.querySelector(".playerScore")
let statusElement = document.querySelector(".status")
let roundCount = 0;
let buttons = document.querySelectorAll(".choice")
let computerChoice;
let playerChoice;
let computerChoiceElement = document.querySelector(".computerChoice")
let playerChoiceElement = document.querySelector(".playerChoice")

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1
    switch(randomNumber){
        case 1:
        return "rock"
        case 2:
        return "paper"
        case 3:
        return "scissors"
    }
}

buttons.forEach((ele) =>{
    ele.addEventListener("click", () =>{
        playerChoice = ele.textContent;
        computerChoice = getComputerChoice()
        playRound(computerChoice, playerChoice)
    })
})

function playRound(computer, player){
    console.log(`
    computer chose ${computer}
    player chose ${player}
    `)
}



