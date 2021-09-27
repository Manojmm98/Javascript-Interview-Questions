

// composition is the addition of smaller functions 

// define the smaller functions

let add =(x,y)=>{
   return x+y;
}
let subtract =(x,y)=>{
    return x-y;
}
let multiply =(x,y)=>{
    return x*y;
}
let divide =(x,y)=>{
    if(y==0) return 'invalid number';
    return x/y;
}

let calculate = (x,y,opreation)=>{
  return  opreation(x,y);
}

console.log(calculate(20,10,add));
console.log(calculate(20,10,subtract));
console.log(calculate(20,10,multiply));
console.log(calculate(20,10,divide));

// we creeated a calculate function which take 3 arguments and will return the appropriate value according to the function arguments