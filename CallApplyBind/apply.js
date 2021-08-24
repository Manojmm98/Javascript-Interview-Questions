

//apply work same as call but the only diffrence is when we have some arguments then we are calling the arguments with this g(this,2,3,5)
// but in apply we have to pass the arguments inside an array (arry=[2,3,5])and will call by g(this,array)


let obj = {
    name: 'manoj',
    f:function(){
        function g(x,y,z){
             console.log(x+y+z);
             console.log(this);
        }
        let arr = [2,4,5];
        g.apply(this,arr); // output will be 11 and the object
                           
    }
};