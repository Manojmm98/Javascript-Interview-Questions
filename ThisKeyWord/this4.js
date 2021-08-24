
// Inside browser with strict mode

"use strict";
 // global


 console.log(this); //o/p-->// window object

 // inside function

 function f(){
     console.log(this);
 }
 f();             //0/p--> // undefined


// inside an object

let obj ={
    name:'manoj',
    f:function(){
        console.log(this);
    }

}

obj.f(); //0/p--> //  object itself


// inside inner function of an obj

let obj1 ={
    name: 'raja',
    f:function(){
        function r(){
            console.log(this);
        }
        r();
    }
}

obj1.f(); // undefined


// Summary 
// Context: Browser + strict 

// 1. global area => this = window object
// 2. function in global area => this = undefined  (diff from non strict)
// 3. direct function in an object => this = object itself 
// 4. indirect function in an object => undefined   (diff from non strict)

// case 2 and 4 behaves same 






