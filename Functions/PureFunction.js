
// pure function is a function which has no side effect 

// means if we declare a variable outside a function and we are updating the value inside the function then it will called impure function 
// if our value remain same has no side effect then it will be called pure function

// here for same value the output changes always
// impure function
var val = 10;

function add() {
    val++;
    console.log(val);
}

add(val);
add(val);
add(val);
add(val);


//Pure functions are functions that accept an input and returns a value without modifying any data outside its scope(Side Effects). 
//Its output or return value must depend on the input/arguments and pure functions must return a value.

// pure function
// the value of x and y for same input will always give same output

function remove(x,y) {
    return x-y;
}

console.log(remove(10,20))