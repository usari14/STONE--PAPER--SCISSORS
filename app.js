let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userscr =document.querySelector("#userScore");
const compscr =document.querySelector("#compScore");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const draw = () => {
    console.log("Draw Game")
    msg.innerText = `Game Draw Start Again ( ${userChoice} same as ${compChoice} )`;
    msg.style.backgroundColor = "grey";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("WIn");
        msg.innerText = `Congratulations You WIn, Your ( ${userChoice} beats ${compChoice} )`;
        userScore++;
        userscr.innerText = userScore;
        msg.style.backgroundColor = "green";
    }else{
        console.log("lose")
        msg.innerText = `Better Luck Next Time, Computer ( ${compChoice} beats ${userChoice} )`;
        compScore++;
        compscr.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log(userChoice);
    const compChoice = genCompChoice();
    console.log(compChoice);

    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice );
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice clicked", userChoice);
        playGame(userChoice);
    });
});
