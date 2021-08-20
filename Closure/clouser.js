// create a function which has a local array in closure  this function will return another function which take two arguments one is opreation 
// another value and the opreation will perfrom accroding to the arguments given

function Queue(){
    let arr = [];
    return function (op,value) {
         if(op=="insert"){
             arr.push(value);
         }
         else if(op=="out"){
             arr.shift();
         }
         else if(op=="show"){
             console.log(arr);
         }
    }
}

let f = Queue();
f("insert",4)
f("insert",5)
f("insert",6)
f('show');
f("out")
f('show');