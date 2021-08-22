

// if we want to provide a new functionality to an old browser whichn not support it then we have ti write ployfill of that function


// polyfill for forEach function


let arr = [1,2,3,4]

Array.prototype.forEach= null;

if(!Array.prototype.forEach){
    
    Array.prototype.forEach= function(callback){
        for(val of this){
            callback(val);
        }
    }
}





arr.forEach(val=>{
    console.log(val*2);
})

