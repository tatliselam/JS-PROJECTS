let userName = "";
userName = prompt("whats your name");
userName ? console.log("Hello " + userName):
console.log("Hello " );
let userQuestion  =prompt("ask a question");
console.log ("your question is " + userQuestion);
let randomNumber = Math.floor( Math.random() *8);

let eightBall= randomNumber;
if(eightBall==1){
  alert("It is certain");
}else if(eightBall==2){

alert ("It is decidedly so");
}else if(eightBall  ==  3){

alert ("Reply hazy try again");
}else if(eightBall  == 4){

  alert ("Cannot predict now");
  }else if(eightBall  == 5){

    alert ("Do not count on it");
    }else if(eightBall == 6){

      alert ("My sources say no");
      }else if(eightBall == 7){

        alert ("Outlook not so good");
        }else if(eightBall == 8){

          alert ("Signs point to yes");
  
            }
