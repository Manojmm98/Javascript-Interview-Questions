
// if we have multiple promises then we will use promise.all to resolve them 

// promise.all will take the promises in a promise array and also will return another promise 
let fetch = require('node-fetch')

let promise1 = fetch("https://jsonplaceholder.typicode.com/users");
let promise2 = fetch("https://jsonplaceholder.typicode.com/todos");

let promise3 = Promise.all([promise1,promise2]);

promise3.then(function(valArr){
       console.log(valArr);
})