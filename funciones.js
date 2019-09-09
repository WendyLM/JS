function ejemplo1(fn) {
    fn();
  }
  
  ejemplo1(function() {
    console.log("hola");
  });  // "hola"


  function ejemplo2(fn) {
    var nombre = "Pepe";
    fn(nombre);
  }
  
  ejemplo2(function(nom) {
    console.log("hola " + nom);
  });  // "hola Pepe"
  