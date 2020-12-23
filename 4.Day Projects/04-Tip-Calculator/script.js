
let firstBill = 124 ;
let secondBill = 48 ;
let thirdBill = 75 ;
let fourthBill = 268 ;
let totalBudget = 650;

function calculateTips(bill) {
    let percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return Math.floor(percentage * bill);
}
console.log(calculateTips(48));
console.log("For $" + firstBill + " cost bill; you should pay $" + calculateTips(firstBill) + " tip.");
console.log("For $" + secondBill + " cost bill; you should pay $" + calculateTips(secondBill) + " tip.");
console.log("For $" + thirdBill + " cost bill; you should pay $" + calculateTips(thirdBill) + " tip.");
console.log("For $" + fourthBill + " cost bill; you should pay $" + calculateTips(fourthBill) + " tip.");
console.log("Your total tip amount is $" + parseFloat(calculateTips(firstBill)+calculateTips(secondBill)+calculateTips(thirdBill)+calculateTips(fourthBill)));

function getTotalTips (){
    return calculateTips(firstBill)+calculateTips(secondBill)+calculateTips(thirdBill)+calculateTips(fourthBill)
}
console.log("Your total tip amount is $" + getTotalTips());

function budgetDust(){
    let totalBill =  firstBill + secondBill + thirdBill + fourthBill;
    let lastBudget = totalBudget - (totalBill + getTotalTips());
    if (lastBudget < (totalBudget*0.2)){
        console.log("You have only " + lastBudget + " amount of money. Be careful")
    } else {
        console.log("You have " + lastBudget + " amount of money. it is ok")
        
    }
}
budgetDust();