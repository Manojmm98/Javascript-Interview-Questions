
// shallow copy --> if there will be object inside an object then if we copy the objects then the objects will ponting to the same adress


let obj = {
    name: 'manoj',
    age: 23,
    adress: {
        city:'Hyderabad',
        pincide: 500038
    }
}


let copyobj = {}

for(x in obj) {
    copyobj[x]=obj[x];
}

console.log(copyobj);


// deep copy --> here we have to make change the adress not the references

// convert the object to string and then convert the string into object again


let deepcopy= JSON.parse(JSON.stringify(obj));

console.log(deepcopy);