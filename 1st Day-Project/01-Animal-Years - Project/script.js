// defining my age
let myAge = 43;
let userAge = prompt("enter your age")*1;// to get user`s age.



// Defining early years. The first two human years of dog's life count
let earlyYears =2;
earlyYears *= 10.5; //earlyYears =earlyYears *10.5

//Defining later years. Each human ye following counts as 4 dog years
let laterYears = myAge -2;
laterYears *= 4;
let userLaterYears =userAge -2;
userLaterYears *=4;

//Calculating my age in dog years
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears); // if you want to check previous steps.
let userAgeInDogYears =earlyYears +userLaterYears;
alert(`your Age In Dog years is ${userAgeInDogYears} years`);


// Defining my name
const myName = "ZUBEYR".toLowerCase();


//Displaying my name and age in dog years.interpolation method.
console.log(`My name is ${myName}. I am  ${myAge} years old in human years which is ${myAgeInDogYears}  years old in dog years.`);
console.log('My name is ' + myName+'. I am '+ myAge+ ' years old in human years which is '+ myAgeInDogYears+ ' years old in dog years.'); // 20 satirdaki ile ayni

