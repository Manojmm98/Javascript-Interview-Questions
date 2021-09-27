
// impure function result changes always

// let y=10;

// let z =20;

// function add(x) {
    
//    y=y*x;
//    z=z*x;
//    return x+y;
// }

// console.log(add(10));
// console.log(add(10));
// console.log(add(10));


// pure function result same always

let y=10;

let z =20;

function add(x,y,z) {
    
   y=y*x;
   z=z*x;
   return x+y;
}

console.log(add(10,y,z));
console.log(add(10,y,z));
console.log(add(10,y,z));
