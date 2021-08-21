
// Map method --> it will travel like a loop on the given array and will return the provided value

let arr= [1, 2, 3]


let narr = arr.map(
function double(x) 
{ 
    return x*2;
}

)
console.log(narr);


// filter Method ---> It will filter out the element according to our condition in the given array


let arr1 = [1, 2, 3]

function isEven(x){
    return x%2===0;
}

let newarr=arr1.filter(isEven);

console.log(newarr);





