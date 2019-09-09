//The arguments object

function func1(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1
  
    console.log(arguments[1]);
    // expected output: 2
  
    console.log(arguments[2]);
    // expected output: 3
  }
  
  func1(1, 2, 3);

  arguments[0] // first argument
arguments[1] // second argument
arguments[2] // third argument

arguments[1] = 'new value';

var args = Array.prototype.slice.call(arguments);
// Using an array literal is shorter than above but allocates an empty array
var args = [].slice.call(arguments);

var args = Array.from(arguments);
var args = [...arguments];

function longestString() {
    var longest = '';
    for (var i=0; i < arguments.length; i++) {
      if (arguments[i].length > longest.length) {
        longest = arguments[i];
      }
    }
    return longest;
  }

  //Using typeof with Arguments

//The typeof operator returns 'object' when used with arguments

console.log(typeof arguments); // 'object'

//The type of individual arguments can be determined by indexing arguments:

console.log(typeof arguments[0]); // returns the type of the first argument


