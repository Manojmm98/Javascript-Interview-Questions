

// we can handle any error through try and catch 

// let us take an example of try catch where we try to read a file which is not present



fs.readdirSync('f1.txt')

//handling this error through try and catch

try{
    fs.readFileSync('f1.txt')
}
catch(e){
    console.log(e.message);
}