// while loop is work same as for loop but only works when condiction is true

//syntax
// while (condition) {
//     // code
//     // so-called "loop body"
//   }
// let arr = 'hello'
// while (arr=='hello') {
//     console.log('true');
// }

let i =5;
while (i<3){
    console.log('true');
}


///------------do while loop --------------------------------////////////////


// syntax

// do {
    // loop body
//   } while (condition);

// do while will check condition second and then it will 1st move a step

 i =2;
do{
    console.log('false');
}
while(i>5);



// break $ continue  statement

// if we give break then the excution will be stooped 
// if we give continue then the excution will be continue for next itereation
// The continue directive is a “lighter version” of break.
//  It doesn’t stop the whole loop. Instead, it stops the current iteration and 
//  forces the loop to start a new one (if the condition allows

while(i>5){
    i++;
    // the excution will be occur for next itreation
    continue;
}

while(i>10){
    i--;
    break;
}

















