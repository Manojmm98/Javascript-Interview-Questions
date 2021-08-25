
// async await  is like then and catch 

// async await is a syntax sugar for then and catch 

// if we are doing asynchronous work then instead of then catch we can use only await 

// when we are declaring a function which is async function ---> just add async keyword 

let fetch = require('node-fetch');

async function f (){

let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');

let json = await data.json();

console.log(json);

}

f()
