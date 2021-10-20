// Q - Write a function f that returns product of x and y with both of the following function calls

// f(x, y)
// f(x)(y)



// Solution:
// create a function f and check whether the length of its arguments is equal to 1 or not if 
//length is 1 then return a function that take x as argument and will return 

function f(y, x) {
    if (arguments.length == 1) {
       
      return function (x) {
        return y * x;
      };
    } else {
      return x * y;
    }
  }


 console.log(f(2,4)); 
// console.log(f(2)(4));
