// length property


let str = "my name";
//console.log(str.length);


// slice method
// slice is applied in string and it will break the string by given index 

let newstr=str.slice(2,6);
//console.log(newstr);


// replace method
// it make changes in new string and
// it changes only first occurance of the word

let string = "moon is sweet and moon is cool";
let newstring=string.replace("moon","sugar")
console.log(newstring);

// strings are immutable we can not change any index of string

let st = "Manoj";
st[2]='l';// not possible
console.log(st);


// upper case & lower conversion

let line = "HEllo"
let newline = line.toLocaleUpperCase();
let newline1 = line.toLocaleLowerCase();
console.log(newline);
console.log(newline1);


// trim function 

let strim = "         manoj               "
// if we want to remove spaces then just use trim function

console.log(strim);
let ntrim=strim.trim();
console.log(ntrim);

// Ascii code function

let as = "Manoj"
 console.log(as.charCodeAt(0));

 // split method

 let str1 = "hii+hello+xxx+lll"
 let val=str1.split("+");
 console.log(val);































