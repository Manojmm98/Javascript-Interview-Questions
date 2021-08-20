

// here the function f will run after the function sayhi because it is a call back function and will wait in the callbak queue till 
// the call stack become empty after the call stack become empty then event loop will push the function into call stack

function sayHi() {
    console.log('hii');
   
}

function f() {
    console.log(`printed after 2 sec 'hello'`);
}

setTimeout(f,2000);

sayHi();
