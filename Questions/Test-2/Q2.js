// Q - Convert the following function "f" to a pure function and create an impure function 
//g which is a higher order function which take result of f and print it like f does it here.

let obj = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    length: 5,
  };
  
  function f() {
    for (let i = 1; i < obj.length; i++) {
      obj[i] = obj[i] + 1;
    }
    delete obj["length"];
    for (let x in obj) {
      console.log(`at index ${x} we have value ${obj[x]}`);
    }
  }
  
  f();

  
// Solution:



// function f(obj) {
    // convert the object to string and then parse it to object again and store it in a new var
//   let nObj = JSON.parse(JSON.stringify(obj));
// itreate through all the index of new object and add 1 to it 
//   for (let i = 1; i < nObj.length; i++) {
//     nObj[i] = nObj[i] + 1;
//   }
// delete length from the new object and return the new object
//   delete nObj["length"];
//   return nObj;
// }

// create a function g which is a higher order function and take obj and callback as  arguments here callback is function f , now 
// inside the function call the callback function and pass obj as arguments and store it again to obj
// function g(obj, callback) {
//   obj = callback(obj);
//   for (let x in obj) {
//     console.log(`at index ${x} we have value ${obj[x]}`);
//   }
// }

// g(obj, f);