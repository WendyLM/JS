var test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
  };
  
  console.log(test.func());

  // In web browsers, the window object is also the global object:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"

function f1() {
    return this;
  }
  
  // In a browser:
  f1() === window; // true 
  
  // In Node:
  f1() === global; // true

  //in this case In the second example, this should be undefined, because f2 was called directly and not as a method or property of an object (e.g. window.f2())
  function f2() {
    'use strict'; // see strict mode
    return this;
  }
  
  f2() === undefined; // true

  // An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'

function add(c, d) {
    return this.a + this.b + c + d;
  }
  
  var o = {a: 1, b: 3};
  
  // The first parameter is the object to use as
  // 'this', subsequent parameters are passed as 
  // arguments in the function call
  add.call(o, 5, 7); // 16
  
  // The first parameter is the object to use as
  // 'this', the second is an array whose
  // members are used as the arguments in the function call
  add.apply(o, [10, 20]); // 34

  function bar() {
    console.log(Object.prototype.toString.call(this));
  }
  
  bar.call(7);     // [object Number]
  bar.call('foo'); // [object String]

  function f() {
    return this.a;
  }
  
  var g = f.bind({a: 'azerty'});
  console.log(g()); // azerty
  
  var h = g.bind({a: 'yoo'}); // bind only works once!
  console.log(h()); // azerty
  
  var o = {a: 37, f: f, g: g, h: h};
  console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty


  // Call as a method of an object
var obj = {func: foo};
console.log(obj.func() === globalObject); // true

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true

// Create obj with a method bar that returns a function that
// returns its this. The returned function is created as 
// an arrow function, so its this is permanently bound to the
// this of its enclosing function. The value of bar can be set
// in the call, which in turn sets the value of the 
// returned function.
var obj = {
    bar: function() {
      var x = (() => this);
      return x;
    }
  };
  
  // Call bar as a method of obj, setting its this to obj
  // Assign a reference to the returned function to fn
  var fn = obj.bar();
  
  // Call fn without setting this, would normally default
  // to the global object or undefined in strict mode
  console.log(fn() === obj); // true
  
  // But caution if you reference the method of obj without calling it
  var fn2 = obj.bar;
  // Calling the arrow function's this from inside the bar method()
  // will now return window, because it follows the this from fn2.
  console.log(fn2()() == window); // true


  var o = {
    prop: 37,
    f: function() {
      return this.prop;
    }
  };
  
  console.log(o.f()); // 37

  var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // 37

o.b = {g: independent, prop: 42};
console.log(o.b.g()); // 42

var o = {f: function() { return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5

function sum() {
    return this.a + this.b + this.c;
  }
  
  var o = {
    a: 1,
    b: 2,
    c: 3,
    get average() {
      return (this.a + this.b + this.c) / 3;
    }
  };
  
  Object.defineProperty(o, 'sum', {
      get: sum, enumerable: true, configurable: true});
  
  console.log(o.average, o.sum); // 2, 6

  /*
 * Constructors work like this:
 *
 * function MyConstructor(){
 *   // Actual function body code goes here.  
 *   // Create properties on |this| as
 *   // desired by assigning to them.  E.g.,
 *   this.fum = "nom";
 *   // et cetera...
 *
 *   // If the function has a return statement that
 *   // returns an object, that object will be the
 *   // result of the |new| expression.  Otherwise,
 *   // the result of the expression is the object
 *   // currently bound to |this|
 *   // (i.e., the common case most usually seen).
 * }
 */

function C() {
    this.a = 37;
  }
  
  var o = new C();
  console.log(o.a); // 37
  
  
  function C2() {
    this.a = 37;
    return {a: 38};
  }
  
  o = new C2();
  console.log(o.a); // 38


  // When called as a listener, turns the related element blue
function bluify(e) {
    // Always true
    console.log(this === e.currentTarget);
    // true when currentTarget and target are the same object
    console.log(this === e.target);
    this.style.backgroundColor = '#A5D9F3';
  }
  
  // Get a list of every element in the document
  var elements = document.getElementsByTagName('*');
  
  // Add bluify as a click listener so when the
  // element is clicked on, it turns blue
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', bluify, false);
  }

  <button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>

button onclick="alert((function() { return this; })());">
  Show inner this
</button>