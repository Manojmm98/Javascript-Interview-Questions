Title: 
The Reality Check

Meta-Tags:
Javascript, JS, interview, questions, interview questions, execution context, hoisting ,practice

Description:
Find output of the following:


// log statment will never excute because we did not call the function f here
function f() {
  console.log(arguments);
}

// here we are giving two input and the output will be sum of all
function f(a, b) {
  return a + b;
}

console.log(f(2, 3, 4, 5));

function f(x, y, z, t) {
    return x + y + z + t;
}

console.log(f(2, 3, 4, 5));

Options: 
A)
Error

B)
14
14

C)
[Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 }
[Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 }

D)
undefined
undefined

Solution:
B 