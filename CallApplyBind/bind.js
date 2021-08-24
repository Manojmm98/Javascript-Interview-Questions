

// bind is same as call and apply the only diffrence is call and apply excute the exsiting function but the apply gives us a new function


let obj ={
    name: 'manoj',
    f:function(){
        function g(x,y,z){
          console.log( x + y + z);
          // here this reffer to original obj we have to call it through bind
          console.log(this);
        }

     
        // bind gives us a new function so 1st we have to store it

        // storing bind function in newG

        

        let newG = g.bind(this);

        // call the newG function and the arguments here arguments will reffer to the function g's arguments
        newG(2,4,5)
    }
}

obj.f()