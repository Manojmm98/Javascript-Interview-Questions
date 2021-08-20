
function f(x,y) {
    console.log(arguments);
    return x+y;
}
f(2,3,4,9);

// arguments is a array like object which shows an array like object if we log arguments then it will show the number index wise