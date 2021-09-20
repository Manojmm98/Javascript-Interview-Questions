
// A function which takes another function as an argument or return a function from it will be called higher order function

let raduis = [2,4,6,8]

let area = function(raduis){
     return Math.PI*raduis*raduis
}

let circumference = function(raduis){
    return 2*Math.PI*raduis
}

// here it takes another function as an arguments
function calculate(arr,logic){
    let output = [];

    for(let i = 0; i < arr.length; i++){
        //console.log(logic);
        output.push(logic(arr[i]));
    }

    return output;
}

console.log(calculate(raduis,area));
console.log(calculate(raduis,circumference));
console.log(raduis.map(area));