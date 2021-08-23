
// here we declare var a in function a but we are able to call it from  function B due to closure


function A(){
    let a=7;
    return function B(){
        console.log(a);
    }
}

let f = A();
f();