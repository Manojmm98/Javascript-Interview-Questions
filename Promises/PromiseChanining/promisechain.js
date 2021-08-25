 // to use fetch in node js first install fetch then require fetch
 
 const fetch = require('node-fetch');
 let data=fetch('https://jsonplaceholder.typicode.com/todos/1')
data.then(function(res){
    return res.json();
})
.then(function(json){
   console.log(json);
})