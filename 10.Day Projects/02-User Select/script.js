
// 1 Question 
console.log(Object.keys(users));
//2 Question
console.log(Object.values(users));
//3 Question
console.log(Object.keys(users).length);
//4 Question
function mostSkills(){
    let most=0;
    let skillPerson=[];
    for ( i in users){
        // console.log(users[i].skills)
       
      if (users[i].skills.length>most){
          most=users[i].skills.length;
          skillPerson=i;
          
      }
      
    }
   return skillPerson;
}
console.log(mostSkills());
//5 Question
function points(){
    let higherPoint=[];
    for (i in users){
        if(users[i].points>=50){
            higherPoint.push(i);
        }
    }
    return higherPoint;
}
console.log(points());
//6 Question
function mern(){
  let no=0;
  let nameMern=[];
  for (i in users){
      if(users[i].skills.includes('MongoDB'&&'Express'&&'React'&&'Node')){
        nameMern.push(i);
        no++;
      }
  }
  return ` ${no} , ${nameMern}`;
}
console.log(mern());
 //7 Question
users.Erkin = {
    email: 'erkin@erkin.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'daha neler'],
    age: 30,
    isLoggedIn: false,
    points: 30
  }
  console.log(users);
// 8 Question
  for(i in users){
      console.log (`${i} is ${users[i].age} years old. He knows ${users[i].skills}.`
        )
  }