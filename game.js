let userscore =0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const imageContainer = document.getElementById("imageContainer");

const userScore =document.querySelector("#user-score");
const computerScore =document.querySelector("#computer-score");

const genComputerChoice =() => {
    const options =["rock","paper","scissors"];
    const rand=Math.floor(Math.random()*3);
    return options[rand];
}


const showWinner = (userWin) => {
    if(userWin){
        userscore++;
        userScore.innerText = userscore;
        console.log("You Win");
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }
    else
    {
        compscore++;
        computerScore.innerText = compscore;
        console.log("You Lose");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log(userChoice);
    console.log("user choice", userChoice);
    const compChoice = genComputerChoice();
    console.log("computer choice", compChoice);


    if(compChoice === "rock"){
    imageContainer.innerHTML = `<img src="rock1.jpg">`;
    }
    else if (compChoice === "paper"){
    imageContainer.innerHTML = `<img src="paper2.jpeg">`;
    }
    else{
    imageContainer.innerHTML = `<img src="scissor1.jpeg">`;
   }

   if(userChoice === "rock"){
    document.querySelector("#rock").style.backgroundColor= "black";
    }
    else if (userChoice === "paper"){
        document.querySelector("#paper").style.backgroundColor= "black";
    }
    else{
        document.querySelector("#scissor").style.backgroundColor= "black";
   }

    if(userChoice === compChoice){
        console.log("Game is Drawn");
        msg.innerText = "Game is Drawn";
        msg.style.backgroundColor = "grey";
    }
    else
    {
        let userWin =true;

        if(userChoice === "rock") {
           userWin = compChoice === "paper" ? false : true;
        } 
        else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        document.querySelector("#vs").innerText= "V/S";
        document.querySelector("#rock").style.backgroundColor= "white";
        document.querySelector("#paper").style.backgroundColor= "white"; 
    document.querySelector("#scissor").style.backgroundColor= "white";
        const userChoice =choice.getAttribute("id");
        imageContainer.innerText = "V/S";
        playGame(userChoice);        
    })
})