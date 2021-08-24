
// this keyword work diffrent in diffrent casses  basically javascript works in browser and in node.js 
// there are 4 modes 
         //  1--> inside node js without strict mode
         // 2--> inside node  js with strict mode
         // 3--> inside node browser without strict mode
         // 4--> inside node browser with strict mode


// 1--> inside node js without strict mode

// it has 4 parts

 // 1--> globally defined
 // 2--> inside function
 // 3--> inside an object
 // 4--> inside of a object inside an function inside of that function


 // global


 console.log(this); //o/p-->// empty object

 // inside function

 function f(){
     console.log(this);
 }
 f();             //0/p--> // global object


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

obj1.f(); // global object



// Summary 
// Context: nodejs + non strict 

// 1. global area => this = {} empty object
// 2. function in global area => this = global object 
// 3. direct function in an object => this = object itself 
// 4. indirect function in an object => global object 

// case 2 and 4 behaves same 