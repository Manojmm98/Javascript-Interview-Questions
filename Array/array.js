// push method
// it returns the pushed element

// it changes the original array 

let a = [1,2,3];
let pushedele=a.push(4);
console.log(pushedele);
console.log(a);


// pop method
// it also returns the pop element
// it also changes the original array  but takes no arguments
a.pop();
let returnval = a.pop();
console.log(returnval);
console.log(a);

// split method
// split function changes the strings into an array

let str3 = " hii+how+are+you"

console.log(str3.split("+"));

// shift & unshift methods

// shift--> it removes an element from the starting of an array
// it change the original array

let arr2 = [1, 2, 3]
arr2.shift();
console.log(arr2);

//unshift--> it adds an element int the first of an array
// it make changes to the original array

let arr3 = [1, 2, 3];
arr3.unshift(4);
console.log(arr3);


// length method

let arr5 = [1, 2, 3,4, 2, 3];
 console.log(arr5.length);

 // slice method in array also returns the value between the given index
 let slice =arr5.slice(1,5)
 console.log(slice)








