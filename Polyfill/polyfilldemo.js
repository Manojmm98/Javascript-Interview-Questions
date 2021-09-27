
let arr=[2,3,6,8]

function square(a){
    return a*a;
}

function Mymap(arr,cb) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let val=cb(arr[i]);
        newArray.push(val);
    }
    return newArray;
}

let ans = Mymap(arr,square);
console.log(ans);