
// JSON.stringfy--> convert a javascript object into string 


let obj ={
    name : 'raja',
    age : 24
}

let object = JSON.stringify(obj);
console.log(object);

// JSON.parse--> convert a string which contain json object back to object


let newobject = JSON.parse(object);

console.log(newobject);


