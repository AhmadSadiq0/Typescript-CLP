"use strict";
//functions in typescript
function add(a, b) {
    return a + b;
}
let b = add(10, 20);
//Arrow functions
let sub = (a, b) => {
    let result = a - b;
    console.log(result);
    return result;
};
const testNever = () => {
    while (true) {
    }
};
console.log('Hello World');
function check(a) {
    if (a) {
        console.log('a');
    }
    else {
        console.log(' b');
    }
}
check(true);
let test = "abc";
const str1 = test;
