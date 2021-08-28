
// One of the advantages of JavaScript putting function declarations into memory 
// before it executes any code segment is that it allows you to use a function 
// before you declare it in your code


// calling function after declaration

function catName(name) {
    console.log("My cat's name is " + name);
  }
  
  catName("Tiger");
  
  /*
  The result of the code above is: "My cat's name is Tiger"
  */

// calling the function before declaring

catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}

/*
The result of the code above is: "My cat's name is Chloe"
*/


// Even though we call the function in our code first, before the function is written,
// the code still works, because this is how context execution works in JavaScript.