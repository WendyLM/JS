//ejemplo de progrmacion asincroonica

console.log('Primero');
setTimeout(_ => {
  console.log('Segundo');
},10);
console.log('Tercero');

//promise reusleve
Promise.resolve().then(() => console.log(2));
console.log(1); // 
