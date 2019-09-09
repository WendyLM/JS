const edades = [{
    name: "Wendy",
    edad: 20
},
{
name: "Alfredo",
edad: 21
},

{
    name: "Alejandro",
    edad:27
    
},
{
    name: "Mario",
    edad: 30
    
},

{
    name: "Luis",
    edad: 33
    
},
]

//suma edades
let suma;

console.log((edades.map(suma => suma.edad)).reduce((a,b) => a+b));

console.log(edades.filter(object => object.edad>20));
console.log(edades.filter(object => object.edad>30));




