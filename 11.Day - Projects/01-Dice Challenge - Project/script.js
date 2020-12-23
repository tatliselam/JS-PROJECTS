function randomGenerator(){
  return Math.floor(Math.random() *6) +1;
}
console.log(randomGenerator(6));
let startButton =document.getElementById("start");
let dice1 = document.getElementById("dice_A");
let dice2 = document.getElementById("dice_B");
startButton.onclick =() =>{
 let randomNumber1;
 let randomNumber2;
randomNumber1 = randomGenerator();
randomNumber2 = randomGenerator();
dice1.src = "images/dice" + randomNumber1 + ".png";
dice2.src = "images/dice" + randomNumber2 + ".png";
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
    document.getElementById("player_1").className = "player-win";
    document.getElementById("player_2").className = "";
}
else if (randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 WINS";
  document.getElementById("player_2").className = "player-win";
  document.getElementById("player_1").className = "";
}
else {
  document.querySelector("h1").innerHTML="Draw";
  document.getElementById("player_1").className = "";
  document.getElementById("player_2").className = "";
}
}



