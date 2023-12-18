let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = (userChoice, compChoice) => {
  //console.log("Draw Game");
  msg.innerText = `Draw game,You ${userChoice} and Comp ${compChoice}`;
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    //console.log("You Win");
    userScore++;
    msg.innerText = `You Win,Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScorePara.innerText = userScore;
  } else {
    //console.log("You lose");
    compScore++;
    msg.innerText = `You lose, ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScorePara.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  //console.log("user Choice=", userChoice);
  //generate computer choices
  const compChoice = genCompChoice();
  //console.log("Comp Choice=", compChoice);

  if (userChoice === compChoice) {
    drawGame(userChoice, compChoice);
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      //scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissors,rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      /// rock , paper
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //console.log("User Clicked choice", userChoice);
    playGame(userChoice);
  });
});
