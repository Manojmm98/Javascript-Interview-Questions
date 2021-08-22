
// write ployfill for filter

let arr = [9,5,3,6];

Array.prototype.myFilter = function(callback) {

       let ans = [];

       for(let i = 0; i < this.length; i++) {
             if(callback(this[i])==true) {
                 ans.push(this[i]);
             }
            }
            return ans;

}


function isEven(x){
    return x%2 === 0
}

let rans = arr.myFilter(isEven);
console.log(rans);