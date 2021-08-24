
// inside browser without strict mode

 // global


 console.log(this); //o/p-->// window object

 // inside function

 function f(){
     console.log(this);
 }
 f();             //0/p--> // window object


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

obj1.f(); // window object


// Summary 
// Context: browser +  non strict 

// 1. global area => this = window object
// 2. function in global area => this = window object
// 3. direct function in an object => this = object itself 
// 4. indirect function in an object => window object

// case 2 and 4 behaves same 






