function calculateTips(bill) {  //1-2
if (bill<=50) {
return Math.floor(bill * 0.2);

}else if (bill >50 && bill<=200){
return Math.floor(bill * 0.15);
}else{
return Math.floor(bill * 0.10); 
}
}
let bill1 =124;
let bill2 =348;
let bill3 =75;
let bill4 =268;

console.log("You have paid $"+ calculateTips(bill1) + " as a tip at first restaurant"); //3
console.log("You have paid $"+ calculateTips(bill2)+ " as a tip at second restaurant");//4
console.log("You have paid $"+ calculateTips(bill3)+ " as a tip at third restaurant");
console.log("You have paid $"+ calculateTips(bill4)+ " as a tip at forth  re(staurant");

function getTotalTips(){ //5
  return calculateTips(bill1) + calculateTips(bill2) +calculateTips(bill3) +calculateTips(bill4);
  
}

console.log ("you have paid $" +getTotalTips());
function budgetDust(){
  let totalSpentMoney =bill1 + bill2 + bill3 + bill4 +getTotalTips();
  let spentpercentage = (totalSpentMoney /750) *100;
  if (spentpercentage > 80){
    console.log ("you have spend to much stop spending");

  }
}
budgetDust();