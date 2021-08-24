

// call method if we call the method on an function then the this of that function will reffer to the original object instead of undefined

"use strict"

let obj1 ={
    name: 'raja',
    f:function(){

        // using this keyword i want to acess the property of obj in function r
        function r(x,y,z){
            console.log( x + y + z);
            console.log(this);
        }
        //r.call(this);  // output will be {name:raja, f: [Function: f]}
        // here this reffer to the original object obj1

        // if i want to pass some argument in r and now i  will call the function by this way
        r.call(this,2,4,5)
           
    }


}

obj1.f();