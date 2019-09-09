//diferenvias entre tipos de dunciones

//function expression
 const gato = function(a,b){
     return a+b;
 }
 console.log(gato(3,5));

 //function statement

 function perro (r,s){
     return r-s;
 }
console.log(perro(8,5));

//around fuctions

const suma = (m) => (n) => m+n;
console.log(suma(5)(5));
//function anonima es una funcion autoejecutable
const foo = function(j,s){ 
    return s*j;/*...*/ };

console.log(foo(5,7));

//function IFEE se autoejecuta inmediatamente
var result = (function () { 
    var name = "Barry"; 
    return name; 
})(); 
// Immediately creates the output: 
result;