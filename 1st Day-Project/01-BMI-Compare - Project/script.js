//BMI:(Body Mass Index), 
//creat variables to store mass of mark and john
let massMark = prompt('enter marks  mass');
let massJohn = prompt('enter John mass');
let heightMark = prompt('enter Mark height');
let heightJohn = prompt('enter John height');
//2- This above lines for BMI calculate.
let bmiJohn = massJohn / (heightJohn * heightJohn);
let bmiMark =  massMark / (heightMark * heightMark);
//3-Print  BMIs to the console.
console.log('Johns BMI is '+bmiJohn+' Mark BMI  is '+ bmiMark)

//We have fixed to  2  decimals
//(Math.Floor: sayiyi yuvarlatiyor.Noktadan onceki kaliyor
// Math.Round: 4.5  sonrasini 5  yuvarlar.4.4  altindakini 4 yuvarlar
// toFixed:3.987385687356786957826---(2 desek) --->3.99  olur.gibi
//4-shorten BMI results
bmiJohn = Math.floor(bmiJohn);
bmiJohn = Math.floor(bmiMark);
//5-create a boolean variable to  assign higherBMI  
let higherBMI =  bmiJohn > bmiMark;
//const higherBMI = A > B ;//this will gives "true"
//const higherBMI = A < B ;//this will gives "false"

//6-Use console.log and string interpolation to   log the result
console.log (`Is Mark's BMI is higher than John's? Answer is ${higherBMI}. Because Mark's BMI is ${bmiMark} and John's BMI is ${bmiJohn}.`)

//Additional step
if(bmiJohn > bmiMark){
  console.log('John BMI is greater than Mark')
}else if(bmiJohn < bmiMark){
  console.log('John BMI is less than Mark')
}else {
  console.log('John BMI equals to Mark')
}