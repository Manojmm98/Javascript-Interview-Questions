
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


// reduce Method--> it will take argument as a function and that function will take two arguments 
// and thsi will work according to our returned value


let array = ["this ","is ","a ","string " ]

function concat(x,y){
    return x + y;
}

let rans = array.reduce(concat);

console.log(rans);





