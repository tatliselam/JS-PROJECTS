
let numberOfBottles = 99;

function numberOfBottless(num, hit){
console.log("There are "+numberOfBottles+" bottles now!!! GOOD LUCK!!!");
while(num>0){
  if(hit<=num){
    num=num-hit; 
    console.log("There are "+num+" bottles left");
  }
  if(hit>num){
    num=0;
    console.log("There are no any bottles left");
  }
}
}
numberOfBottless(numberOfBottles,5);