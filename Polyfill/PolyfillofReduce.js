let arr = [2,4,6,7,8];


Array.prototype.myReduce= function(callback) {
    let accumulator=this[0];
    for (var i = 1; i < this.length; i++) {
       accumulator=callback(accumulator,this[i])
  }
  return accumulator;

}

let ans =arr.myReduce((val1,val2)=>{
    return val1 + val2;
})
console.log(ans);