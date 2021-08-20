

// setInterval is same as set_timeout but setInterval calls every times after the given timer and settimeout run once


// if we want to stop the setinterval 
// then we have to call the clearInterval function in a settimeout function with the exact time given in setInterval

let fun = setInterval(function() {
    console.log('i will be printed after every 2 seconds');
},2000)

setTimeout(function() {
    clearInterval(fun);
},2000);