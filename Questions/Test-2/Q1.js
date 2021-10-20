// Q-  List the side effect and convert the function to a pure function which does the same thing

let arr = [1, 2, 3, 4];

function f(arr) {
    for (x in arr) {
        arr[x] = 0
    }
    return arr;
}

console.log(arr);

console.log(f(arr));

console.log(arr);


// solution

// arr is getting changed that is side effect

// function f(arr) {
//     let nArr = arr.map(x=>{return 0})
//     return nArr;
// }


// pure function --> always gives the same return value(output) for the same arguments(input). the function cannot depend on any mutable state.

// side effect--> Side effects are basically anything that affects something outside of the scope of the current function that's being executed
