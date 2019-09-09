fetch('https://jsonplaceholder.typicode.com/users').then(function(respuesta) {
  // Convertir a JSON
  return respuesta.json();
}).then(function(j) {
  // Ahora 'j' es un objeto JSON
  console.log(j);
});