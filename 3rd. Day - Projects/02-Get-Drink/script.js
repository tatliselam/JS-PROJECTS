
function  calcBottles (money,perDrinkPrice){
return Math.floor(money / perDrinkPrice);

}
console.log  (calcBottles(200,70)) 
function calcChange(money,perDrinkPrice){
  return money%perDrinkPrice;

}
function getDrink(){
  console.log ("leaveHouse");
  console.log ("turn left");
  console.log ("go to the market");
  console.log ("buy "+calcBottles(200,70)+" bottles of drink");
  console.log ("pay for drink");
  console.log ("leave market");
  console.log ("come back to the House");
  console.log ("Robot:Hello master here is your "+calcChange(200,70)+" change");
}
getDrink();