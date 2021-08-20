// we are given two integer m and a if there will be "a" then add the 
function f(flag){
    let product=1;
    if(flag=="m"){
        for(let i=1;i<arguments.length;i++){
           product=product*arguments[i];
        }
        return product;
    }
    else if(flag=="a"){
        let sum =0;
        for(let i=1;i<arguments.length;i++){
              sum=sum+arguments[i];
        }
        return sum;
    }
}

console.log(f("m",2,4,5,6));
console.log(f("a",2,4,5,6));