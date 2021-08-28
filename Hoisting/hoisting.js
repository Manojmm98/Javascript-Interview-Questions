// JavaScript Hoisting refers to the process whereby the compiler allocates memory 
// for variable and function declarations before the execution of the code.

// Declarations  that are made using var are initialized with a default value of undefined. 

// Declarations made using let and const are not initialized as part of hoisting.


//Variables declared with let and const are also hoisted,
// but unlike for var the variables are not initialized with a default value of undefined. 
//Until the line in which they are initialized is executed, 
//any code that accesses these variables will throw an exception.


// hoisting means allocating memory to variable (through let & var & const) when it is intialized
//console.log(num); // it will give undefined because we did not intialize or declare num before using
var num;//intialized
num = 10;// declaration

console.log(value);
value=6; // it will give ReferenceError--> value is not defined means we and not hoisted value by(let,var or const)


  
x=5;
//console.log(x);
//console.log( x + y );// it will give error because  y is not intialized/hoisted