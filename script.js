let x = Math.floor(Math.random() * 100) + 1;
console.log("out of function " + x);

let output = document.querySelector("#output");
let guess = document.querySelector("#guess");

function check() {
  let num = document.querySelector("#num").value;
  num = parseInt(num);
  output.setAttribute("class", "result");
  guess.innerHTML += "<li>You have guessed " + num + "</li>";

  if (num > x) {
    output.innerHTML = "Your guess is too high!";
    output.setAttribute("class", "resulthl");
  } else if (num < x) {
    output.innerHTML = "Your guess is too low!";
    output.setAttribute("class", "resulthl");
  } else if (num == x) {
    output.innerHTML = "Awesome Job. You did it!";
    output.setAttribute("class", "resultcorrect");
  } else {
    output.innerHTML = "Wrong input";
    output.setAttribute("class", "resultwrong");
  }
}

function restart() {
  output.innerHTML = "";
  output.setAttribute("class", "");
  guess.innerHTML = "";
  x = Math.floor(Math.random() * 100) + 1;
  console.log("inside function " + x);
}
