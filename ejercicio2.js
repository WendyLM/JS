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

  const Bruce = new developer();
  Object.setPrototypeOf(Bruce, new person);
  console.log(Object.getOwnPropertyNames(Bruce));

  