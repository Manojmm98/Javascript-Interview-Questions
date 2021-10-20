
let arr = [2,3,4,5,8]

Array.prototype.Myfilter = function(callback) {
    let newArray =[];
    for (let i = 0; i <this.length; i++) {
        if (callback(this[i]) ==true)  {
            newArray.push(this[i]);
          }
    }
    return newArray;
}


let ans = arr.Myfilter((val1)=>{
    return val1>2;
});
console.log(ans);