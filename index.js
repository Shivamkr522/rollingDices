let variable1 = Math.random();
variable1 = Math.floor(variable1 * 6) + 1;

function func1(variable1) {
  if (variable1 === 1)
    document.getElementsByClassName("img1")[0].src = "images/dice1.png";
  else if (variable1 === 2)
    document.getElementsByClassName("img1")[0].src = "images/dice2.png";
  else if (variable1 === 3)
    document.getElementsByClassName("img1")[0].src = "images/dice3.png";
  else if (variable1 === 4)
    document.getElementsByClassName("img1")[0].src = "images/dice4.png";
  else if (variable1 === 5)
    document.getElementsByClassName("img1")[0].src = "images/dice5.png";
  else
    document.getElementsByClassName("img1")[0].src = "images/dice6.png";


}

let variable2 = Math.random();
variable2 = Math.floor(variable2 * 6) + 1;

function func2(variable2) {
  if (variable2 === 1)
    document.getElementsByClassName("img2")[0].src = "images/dice1.png";
  else if (variable2 === 2)
    document.getElementsByClassName("img2")[0].src = "images/dice2.png";
  else if (variable2 === 3)
    document.getElementsByClassName("img2")[0].src = "images/dice3.png";
  else if (variable2 === 4)
    document.getElementsByClassName("img2")[0].src = "images/dice4.png";
  else if (variable2 === 5)
    document.getElementsByClassName("img2")[0].src = "images/dice5.png";
  else
    document.getElementsByClassName("img2")[0].src = "images/dice6.png";


}

function head(variable1, variable2) {
  if (variable1 === variable2)
    document.getElementsByClassName("heading")[0].innerHTML = "Draw!";
  else if (variable1 > variable2)
    document.getElementsByClassName("heading")[0].innerHTML = "🚩Player1 Wins!";
  else
    document.getElementsByClassName("heading")[0].innerHTML = "Player2 Wins!🚩";
}


func1(variable1);
func2(variable2);
head(variable1, variable2);
