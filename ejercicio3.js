function go(n) {
    // n here is defined!
    console.log(n); // Object {a: [1,2,3]}
  
    for (var n of n.a) { // ReferenceError no podia ser un let
      console.log(n);
    }
  }
  
  go({a: [1, 2, 3]});