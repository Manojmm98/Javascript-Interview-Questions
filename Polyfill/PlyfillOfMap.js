

// polyfill of map function

Array.prototype.Mymap = function(callback) {
    let arr =[];
    for (var i = 0; i < this.length;i++){
      let ans=  callback(this[i]);
      arr.push(ans);
    }
    return arr;
}

let arr = [1,2,3,4,5]

function square(a){
    return a*a;
}

let ans = arr.Mymap(square);
console.log(ans);