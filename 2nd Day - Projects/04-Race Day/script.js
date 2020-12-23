let raceNumber =Math.floor (Math.random() *1000);
var earlyRegistration;
Registration = prompt("did you registered early?");
if (Registration === "yes"){
  earlyRegistration = true;
}else {
  earlyRegistration = false;
}
let userAge = prompt("What is your Age?") *1;
let adultRacers;
if (userAge >18 && earlyRegistration === true){
  raceNumber +=1000;
  adultRacers =  true;
}

if ( userAge > 18 && adultRacers === true){
  alert("Early adults run at 9:30 am.your race number is" + raceNumber);

}else if (userAge >18 &&  earlyRegistration === false ){
  raceNumber +=1000;
  alert("Late adults run at 11:00 am.your race number is" + raceNumber); 

}
if (userAge < 18 &&  earlyRegistration === true ){
  
  alert("Youth registrants run at 12:30 pm. Your race number is  " + raceNumber);  
}else  if (userAge === 18){
  alert("go to see registration desk");
}






