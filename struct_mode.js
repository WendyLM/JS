'use strict';
var v = "Hi! I'm a strict mode script!";
console.log(v);

//Strict mode  for functions

function strict() {
    // Function-level strict mode syntax
    'use strict';
    function nested() { return 'And so am I!'; }
   return "Hi!  I'm a strict mode function!  " + nested();

  }
  function notStrict() { return "I'm not strict."; }

  'use strict';
var sum = 015 + // !!! syntax error si lo convertimos al sistema optal a decimal seria 13 entonces, 13+197+142
          197 +
          142;

var sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
console.log(sum);

//strict mode code
function strict1(str) {
    'use strict';
    return eval(str); // str will be treated as strict mode code
  }
  function strict2(f, str) {
    'use strict';
    return f(str); // not eval(...): str is strict if and only
                   // if it invokes strict mode
                
  }
  function nonstrict(str) {
    return eval(str); // str is strict if and only 
                      // if it invokes strict mode
  }
  
  strict1("'Strict mode code!'");
  strict1("'use strict'; 'Strict mode code!'");
  strict2(eval, "'Non-strict code.'");
  strict2(eval, "'use strict'; 'Strict mode code!'");
  nonstrict("'Non-strict code.'");
  nonstrict("'use strict'; 'Strict mode code!'");

  console.log(strict1);
  console.log(strict2);
  console.log(nonstrict);

  //struct mode 
  function f(a) {
    'use strict';
    a = 42;
    return [a, arguments[0]];
  }
  var pair = f(17);
  console.log(pair[0] === 42);
  console.log(pair[1] === 17);

  //strict mode  code 
  'use strict';
  function fun() 
  { 
      return this;
  }
  console.log(fun() === undefined);
  console.log(fun.call(2) === 2);
  console.log(fun.apply(null) === null);
  console.log(fun.call(undefined) === undefined);
  console.log(fun.bind(true)() === true);
