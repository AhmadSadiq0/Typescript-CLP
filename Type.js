"use strict";
let emp1 = {
    id: 1,
    name: "Jhon",
    department: 'Mobile Apps',
    course: "MAD"
};
//literal type
let age = 50;
let course = "MAD";
let numbers = [1, 2, 3, 4, 5, [123, [1], [2]]];
let stringss = [["1", [12, 12, 23]], "2", 3, 4, 5, [123, [1], [2]]];
//Type Casting
let stringifyEmployee = JSON.stringify(emp1);
console.log(typeof emp1);
const getEmployee = (employeeObject) => {
    let empData = JSON.parse(employeeObject);
    // type caseing
    //old way
    // return (<Employee>empData).name
    //Modern 
    return empData;
};
console.log(getEmployee(stringifyEmployee));
//Type guard??
//Union type
let tip = 10;
const calculateTip = (tip) => {
    let numOfDays = 30;
    //type guard
    if (typeof tip == 'number') {
        return numOfDays * tip;
    }
    else {
        return numOfDays * parseInt(tip);
    }
};
let item1 = {
    id: 1,
    price: '10US',
    title: 'Learn Typescript',
    discount: () => {
    },
    description: 'Test Description'
};
let item2 = {
    id: 1,
    price: '10US',
    title: 'Learn Typescript',
    discount: () => {
    }
};
//Function Type
// let printHelloWorld: Function
// printHelloWorld = () => {
//     console.log('Hello World')
// }
//function signature
let printHelloWorld;
printHelloWorld = (mesage, count = 10) => {
    return mesage + count;
};
console.log(printHelloWorld("abc"));
function studentDB({ fistName }) {
    return fistName;
}
