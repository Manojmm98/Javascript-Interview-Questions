

// prtotype is property if we will define it into an array then it will be universal and will work for all arrays 

// now if we declare prototype of myFunction then it will work for every array


Array.prototype.myFunction= function(){
    console.log(this);
}

let a = [1, 2, 3, 4, 5];
a.myFunction();