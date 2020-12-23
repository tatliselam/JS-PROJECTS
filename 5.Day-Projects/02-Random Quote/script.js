// create variables containing strings
//Use an array to hold the value of the quotes
let quote1='Beware of what you become in pursuit of what you want. - Jim Rohn';
let quote2='It\'s not what happens to you, but how you react to it that matters. - Epictetus';
let quote3='The best revenge is massive success. - Frank Sinatra';
let quote4='You miss 100% of the shots you don\'t take. - Wayne Gretzy';
let quote5='Resentment is like drinking poison and waiting for your enemies to die. - Nelson Mandela';
let quote6='Do not take life too seriously. You will not get out alive. - Elbert Hubbard';
let quotes=[quote1,quote2,quote3,quote4,quote5,quote6];
quotes.sort();//alfabetik siraladi.

let days = ["sunday","monday","tuesday","wednasday","Thurday","friday","saturday"];

function quoteOfDay(arr){
random=Math.floor(Math.random()*arr.length);
//Math.random foncsiyonu 0 ile 1 arasinda rast gele virgullu sayi uretir.//*arr.length diyerek bu foncsiyonun icerisine cagirdigimiz dizinin uzunluguna gore bir rakam  uretmis  oluyoruz]. 
//Math.floor  ile  virgullu  sayisiyi  tam sayiya cevirdik.
return arr[random];

}
console.log(`Today is ${quoteOfDay(days)} and today’s quote is ${quoteOfDay(quotes)}.`)



