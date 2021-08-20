// here obj reffer to an json obj and parent reffer to propName and res reffer to response that will be stored 

let obj ={
    name:'Manoj',
    age: 23,
    adress:{
        city:'hyderabad',
        state: 'Telengana',
        hobbies: ['play','sing','dance'],
        pincode: 500038
    }
}

function flaternObj(obj,parent,res={}) {
    for(let key in obj) {
        let propName = parent?parent+'_'+key:key;
        if(typeof obj[key]=='object' && Array.isArray(obj[key])==false){
            flaternObj(obj[key],propName,res);
        }
        else{
            res[propName] = obj[key];
        }
    }
    return res;
}

console.log(flaternObj(obj));
