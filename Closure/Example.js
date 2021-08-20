// A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment).
// A closure gives you access to an outer function’s scope from an inner function.

// steps of creating closure 

// create a function(1st) and assign a global variable to it
// create another function(2nd) inside it and return the 2nd function
// now store the 1st function in a variable and lastly call the function

function Parent() {
    let name = 'Parsu'
    function child() {
        console.log(`Fathers name is ${name}`);
    }
    return child;
    
}

let f = Parent();
f();
