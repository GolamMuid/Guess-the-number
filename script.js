let x = Math.floor(Math.random() * 100) + 1;
console.log("Inside funtion " + x);
let score = 10;

let output = document.querySelector("#output");
let guess = document.querySelector("#guess");
let scorecard = document.querySelector("#score");
let checkButton = document.querySelector("#check");

function check() {
  let num = document.querySelector("#num").value;
  num = parseInt(num);
  output.setAttribute("class", "result");
  guess.innerHTML += "<li>You have guessed " + num + "</li>";

  if (num > x) {
    output.innerHTML = "Your guess is too high! Try again";
    output.setAttribute("class", "resulthl");
    score = score - 1;
    scorecard.innerHTML = "Number of guesses left: " + score;
  } else if (num < x) {
    output.innerHTML = "Your guess is too low! Try again";
    output.setAttribute("class", "resulthl");
    score = score - 1;
    scorecard.innerHTML = "Number of guesses left: " + score;
  } else if (num == x) {
    output.innerHTML = "Awesome Job. You did it!";
    output.setAttribute("class", "resultcorrect");
    scorecard.innerHTML = "Your score " + score;
    checkButton.style.display = "none";
  } else {
    output.innerHTML = "Wrong input";
    output.setAttribute("class", "resultwrong");
  }

  if (score < 0) {
    output.innerHTML = "GAME OVER";
    scorecard.innerHTML = "Your score 0";
    output.setAttribute("class", "resultwrong");
    checkButton.style.display = "none";
  }
}

function restart() {
  output.innerHTML = "";
  output.setAttribute("class", "");
  guess.innerHTML = "";
  x = Math.floor(Math.random() * 100) + 1;
  score = 10;
  scorecard.innerHTML = "Number of guesses left: " + score;
  console.log(score);
  console.log("inside function " + x);
  checkButton.style.display = "inline-block";
}
