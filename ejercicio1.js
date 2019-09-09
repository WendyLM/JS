// A partir de dos objetos, construye uno solo el cual comparta prototipos de ambos, es decir, que el objeto final resultante debe tener en su cadena de prototipo las propiedades de ambos objetos, los objetos son los siguientes:

const person = function() {
    this.eyes = 'Azules',
    this.hair ='Cafe',
    this.skin ='Blanca',
    this.sex ='Maculino',
    this.name = 'Gerardo'
  }
  
  const developer = function() {
    this.lang = 'Javascript'
  }

  developer.prototype = new person;

  const Bruce = new developer(); //Bruce es una instancia para que apunten a las propiedades del objeto
  Bruce.prototype = new person;
  console.log(Bruce.sex);

  for(let item in Bruce){
      console.log(item)
  }