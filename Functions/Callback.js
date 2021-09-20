
// callback --> i will call u back latter 


function x(y){
    console.log('x');
    y();
}

x(function y (){
    console.log('y ');
    //y()
})
