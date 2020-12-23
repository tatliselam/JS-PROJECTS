let massMark = 50;
let massJohn = 40;
let heightMaqrk = 1.80;
let heightJohn = 1.90
let bmiJohn = massJohn / (heightJohn * heightJohn);
let bmiMark =  massMark / (heightMark * heightMark);
// This above lines for BMI calculate.

bmiJohn = bmiJohn.toFixed(2);
bmiJohn = bmiJohn.toFixed(2);

heightBMI =  bmiJohn > bmiMark;

//const higherBMI = A > B ;//this will gives "true"
//const higherBMI = A < B ;//this will gives "false"
console.log (`Is Mark's BMI is higher than John's? Answer is ${higherBMI}. Because Mark's BMI is ${bmiMark} and John's BMI is ${bmiJohm}.`)