//Defining a getter on new objects in object initializers
var obj = {
    log: ['example','test'],
    get latest() {
      if (this.log.length == 0) return undefined;
      return this.log[this.log.length - 1];

    }
  }
  console.log(obj.latest); // "test".

  //Deleting a getter using the delete operator

  delete obj.latest;


  //Defining a getter on existing objects using defineProperty
  
  var o = {a: 0};

Object.defineProperty(o, 'b', { get: function() { return this.a + 1; } });

console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)


//Using a computed property name
var expr = 'foo';

var obj = {
  get [expr]() { return 'bar'; }
};

console.log(obj.foo); // "bar"


//get Vs. defineProperty
/*When using get the property will be defined on the prototype of the object 
while using Object.defineProperty() the property will be defined on the instance it is applied to.*/
class Example {
    get hello() {
      return 'world';
    }
  }
  
  var obj = new Example();
  console.log(obj.hello);
  // "world"
  console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));
  // undefined
  console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), 'hello'));
  // { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }