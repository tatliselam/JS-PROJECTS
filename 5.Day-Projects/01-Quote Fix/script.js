//Transform a string into an array and fix it!

let quote = "Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.” – Martin Fowler. Agile Software Design";
let favoriteQuote = quote.split(" ");
console.log (favoriteQuote.length);
favoriteQuote.pop();//dizinin   son elemanini kaldiriyor
favoriteQuote.push("Development", "ThoughtWorks", "Inc");// ekledi
favoriteQuote[1] = "fool";
favoriteQuote.shift();//ilkini kaldirdi
favoriteQuote.unshift("Any");
favoriteQuote.splice(7,5, "computer");

console.log (favoriteQuote);











