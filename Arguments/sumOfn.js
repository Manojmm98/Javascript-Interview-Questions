let sum =0;
function name() {
    for (var i = 0; i <arguments.length; i++) {
        sum=sum+arguments[i];
    } 
    return sum; 
}

console.log(name(1,2,3,5,8,9,3,8,6));

