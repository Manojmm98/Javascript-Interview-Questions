
// It is  a wrapper arround a task which on completion gives a value 


/*  promise                                       after completion/resolved

         intatial state =  pending                     state = fullfilled
                                                           
                                                           result = value                                                    

        result = undefined                                     or         

                                                          after rejection  or rejected 

                                                          state = rejected

                                                          result = Error      */



// declare the promise

let p = new Promise(function(resolve, reject) {

     setTimeout(function() {
        
         // for resolve

        // when we have more than one reslove then except 1st resolve all are ignored

         resolve("Work is done");
        //  resolve("Work is done");  // ignore
        //  resolve("Work is done");  // ignore


         // for reject
         
         //reject('Work is not done');

     },2000)

});

// // consume the promise


// p.then(function(value) {
//     console.log(value);
// })


// if we have resolved the promise, also we are passing then also we will get the value 

// setTimeout(function() {
//     p.then(function(value) {
//         console.log(value);
//     })
// },3000)


// if we are adding another consumer call finally then what will happen ? --> finally will be called before then it will not take any value as arguments
// it always pass the value to then

// finally is usefull for clean up opreation
p.finally(function() {
    console.log('finally called');
})
p.then(function(val) {
   console.log(val);
})

// for rejection

p.catch(function(error){
    console.log(error);
})















