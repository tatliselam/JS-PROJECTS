var age = prompt('How old is johm?');
if (age >18){
console.log('John can drink beer');
}
else{
console.log('John can NOT drink beer can drink juice');} //2

//ternary operator. 3
age > 18 ? console.log('John can drink beer'):
console.log('John can NOT drink beer can drink juice'); 

//swicth bir deger alip farkli opsiyonlarla kiyasliyor
//break dogruyu bulunca bir sonrakileri uygulamadan o  dogru yansit
switch (true)  {
case age<13:
console.log('John is a boy');
break;
case age>=13 && age<20:
console.log('John is teenager');
break;
case age>=20 && age <30:
console.log('John is a young man');
break;
default: //yazilinca yukardakilerin hepsi yanlis ise asagidaki kodu uygula.
console.log('John is a man');
} 