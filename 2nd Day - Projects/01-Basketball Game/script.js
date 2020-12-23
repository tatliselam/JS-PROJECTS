//Calculate the average score for each team and set result to variable

let AvgScoreMike=(116+94+123)/3;
console.log(AvgScoreMike);
let AvgScoreJhon=(89+120+103)/3;
console.log(AvgScoreJhon);
 AvgScoreJhon=(97+134+105)/3;
let AvgScoreMary=(97+ 134+ 105)/3;
console.log(AvgScoreMary);

//Decide with teams wins in average (highest average score),and print the winner to console.

if(AvgScoreMike&&AvgScoreJhon<AvgScoreMary){
  console.log("Mary's team wins with "+AvgScoreMary+" points.")
}else if (AvgScoreMike&&AvgScoreMary<AvgScoreJhon){
  console.log("Jhon's  team wins with "+AvgScoreJhone+" points.")
}else if (AvgScoreJhon&&AvgScoreMary<AvgScoreMike){
  console.log("Mike's team wins with "+AvgScoreJhon+" points.")
} 

