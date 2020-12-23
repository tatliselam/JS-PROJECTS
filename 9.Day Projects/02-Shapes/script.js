let shapes = {
  name: ['circle', 'semi-circle', 'triangle', 'square', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'nanogon', 'decagon'],
  sides: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
function findShape(num){
  for(let i=0; i<shapes.sides.length; i++){
    if(num === shapes.sides[i]){
      return shapes.name[i];
    }
  }
}
//console.log(findShape(2));
let side = prompt("Enter number of sides:")*1;
console.log(findShape(side));