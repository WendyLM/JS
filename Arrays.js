//Create an array

var fruits = ['Apple', 'Banana'];

console.log(fruits.length);

//Access (index into) an Array item
var first = fruits[0];

console.log(first);

var last = fruits[fruits.length - 1];

console.log(last);

//Loop over an Array

fruits.forEach(function(item, index, array) {
  console.log(item, index);
});

//Add to the end of an Array

var newLength = fruits.push('Orange');

console.log(newLength)

//Remove from the end of an Array

var last = fruits.pop(); // remove Orange (from the end)

console.log(last);
var first = fruits.shift(); // remove Apple from the front
console.log(first);
console.log(fruits);

//Add to the front of an Array

var newLength = fruits.unshift('Strawberry') // add to the front

console.log(fruits);

//Find the index of an item in the Array

fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf('Banana');

console.log(pos);
console.log(fruits);
//Remove an item by index position

var removedItem = fruits.splice(pos, 1); // this is how to remove an item according of the index position

console.log(removedItem);
console.log(fruits);

//Remove items from an index position

var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); 

var pos = 1, n = 2;

var removedItems = vegetables.splice(pos, n); 
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.
console.log(vegetables); 
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems); 

//Copy an Array

var shallowCopy = fruits.slice(); // this is how to make a copy

console.log(shallowCopy);

//Accessing array elements

var arr = ['this is the first element', 'this is the second element', 'this is the last element'];
console.log(arr[0]);              
console.log(arr[1]);              
console.log(arr[arr.length - 1]);

var promise = {
    'var'  : 'text',
    'array': [1, 2, 3, 4]
  };
  
  console.log(promise['var']);
  console.log(promise['array']);

  //Relationship between length and numerical properties

  