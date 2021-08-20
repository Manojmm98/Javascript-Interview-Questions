// these are  object, Array,function and dates


//Array 

let arr = ['manoj','raja','hari','sahoo'];

// this is a array in js


// object 
// we can declare array function,var inside object

let obj={
    name: 'manoj',
    degrees:['10th','12th','garduation','pg'],
    age:23,
    adress:{
         sate:'odisha',
         dist:'bls',
         mob: '66666666666',
         sayHi: function(){
             return  obj.name;
         }
    }
};
console.log(obj.adress.sayHi());

