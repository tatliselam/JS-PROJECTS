const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}

];
//1st step
for(i=0 i<conpanies.lenght; i++ in companies){
  console.log(companies[i])
}
//2nd step
// companies.forEach(a => console.log (a.name));
// companies.push ({name:"company tenth",category:
// "Retail", start: 1998, end:2020})
// console.log(companies)
//3rd
// const result =  companies. filter(word=>)
// word.catagory === 'Retail';
// console.log(result);

//const result =  companies. filter(word.start>1980&&word.start<1990)
//console.log(result);

//const result =  companies. filter(word=> word.start>9);
//console.log(result);

// let newArray = companies.map (`a => `${a.name}, ${a.start}, ${a.end})
// console.log(newArray)

//Use “sort” method.

companies.sort(function(a, b) {
  if (a.start < b.start){
    return -1;
  }else{ 
    
      return 1;
    }

  });

console.log(companies)

//STEP 6 reduce method
​
let activeYears = companies.reduce((sum,a)=>sum + a.end-a.start,0);
console.log(activeYears);