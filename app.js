let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let yourscore = document.querySelector("#you");
let comscore = document.querySelector("#comp");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const ranindex = Math.floor(Math.random() * 3);
  return option[ranindex];
};

const drawgame = () => {
  console.log("Game was draw");
  msg.innerText = "Game was draw ! paly again";
  msg.style.backgroundColor = "#ffcc00";
};

const showwinner = (userwin, comChoice, userchoice) => {
  if (userwin) {
    userscore++;
    yourscore.innerText = userscore;
    msg.innerText = `You win! Your ${userchoice} beats ${comChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    comscore.innerText = compscore;
    msg.innerText = `You lost. ${comChoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const palyGame = (userchoice) => {
  console.log("user Choice = ", userchoice);
  const comChoice = genCompChoice();
  console.log("computer choice = ", comChoice);

  if (userchoice === comChoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      if (comChoice === "paper") {
        userwin = false;
      } else {
        userwin = true;
      }
    } else if (userchoice === "paper") {
      if (comChoice === "rock") {
        userwin = true;
      } else {
        userwin = false;
      }
    } else {
      if (userchoice === "scissors") {
        if (comChoice === "paper") {
          userwin = true;
        } else {
          userwin = false;
        }
      }
    }
    showwinner(userwin, comChoice, userchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    palyGame(userchoice);
  });
});
