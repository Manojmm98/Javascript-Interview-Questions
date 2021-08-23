
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



// if we want to copy the objects of obj1 for shallowcopy

let obj1 = [{name:'manoj'}];

let copyobj1=[];

for(let i=0;i<obj1.length;i++) {
    copyobj1.push(obj1[i]);
}

console.log(copyobj1);


// for deep copy


let deepcopy1=JSON.parse(JSON.stringify(copyobj1));

console.log(deepcopy1);

