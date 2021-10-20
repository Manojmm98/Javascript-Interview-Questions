

// polyfill of map function
let arr = [1,2,3,4,5]

Array.prototype.Mymap = function(callback) {
    let arr =[];
    for (var i = 0; i < this.length;i++){
      let ans =  callback(this[i]);
      arr.push(ans);
    }
    return arr;
}



let ans = arr.Mymap(val=>{
  return val*2;
});
console.log(ans);