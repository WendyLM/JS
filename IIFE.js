//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(function () {
    statements
})();

//Example 1

var result = (function () {
    var name = "Barry"; 
    return name; 
})(); 
// Immediately creates the output: 
result; // "Barry"
