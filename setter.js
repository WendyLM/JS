
//setter syntax binds an object property to a function

var language = {
    set current(name) {
      this.log.push(name);
    },
    log: []
  }
  
  language.current = 'EN';
  language.current = 'FA';
  language.current = 'LEDO';
  console.log(language.log);
  // expected output: Array ["EN", "FA", "LEDO"]

  //Defining a setter on new objects in object initializers
  var language = {
    set current(name) {
      this.log.push(name);
    },
    log: []
  }
  
  language.current = 'EN';
  console.log(language.log); // ['EN']
  
  language.current = 'FA';
  console.log(language.log); // ['EN', 'FA']

//delete
  delete language.current;

  //Defining a setter on existing objects using definePropertySection
  var o = {a: 0};

  Object.defineProperty(o, 'b', { set: function(x) { this.a = x / 2; } });
  
  o.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
  console.log(o.a) // 5

  //Using property name
  var expr = 'foo';

var obj = {
  baz: 'bar',
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz); // "bar"
obj.foo = 'baz';      // run the setter
console.log(obj.baz); // "baz"