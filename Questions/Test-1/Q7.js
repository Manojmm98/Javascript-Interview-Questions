Title: 
Invincible Strings

Meta-Tags:
Javascript, JS, interview, questions, interview questions, arrays,objects,practice

Description:
Find output of the following:

let a = "This only works if and only if";
// here index of only is 5 so slice the string fronm 5
let b = a.slice(a.indexOf("only"));

let c = b.lastIndexOf("only");

// b[c]= i will not effect the original b
b[c] = "i";

console.log(a);
console.log(b);

Options: 
A)
Error

B)
This only works if and only if
only works if and only if

C)
This only works if and only if
only works if and inly if

D)
This only works if and only if
This only works if and only if


Solution:
B 