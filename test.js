"use strict";
//static type 
let batch = 5;
let i = 10;
let j = 20;
let name = 'Tech Consulting';
let isDoable = true;
//Mixed data types
let rollNumber = 10;
let consultants = ["Parth", "Parthi"];
let rollNumbers = [1, 2, 3];
let nameAndNumber = ["Parth", 1, "Parthi", 2];
let twoDimensional = [
    ["Hello"], ["World"]
];
let twoDimensional2 = [
    ["Hello"], ["World"], [3]
];
//bad practice and not recomended
let value;
value = 2;
value = "abc";
//tuple
// define the type of data and also we define the lenght
let t = ["Hello", 1];
//Enums types
//number
//PascalCase
var RollNumbers;
(function (RollNumbers) {
    RollNumbers[RollNumbers["Sadaat"] = 1] = "Sadaat";
    RollNumbers[RollNumbers["Parth"] = 2] = "Parth";
    RollNumbers[RollNumbers["Parthi"] = 3] = "Parthi";
})(RollNumbers || (RollNumbers = {}));
//String
//enum is a type
var ConstultantDetails;
(function (ConstultantDetails) {
    ConstultantDetails[ConstultantDetails["ID"] = 100] = "ID";
    ConstultantDetails["Name"] = "Path";
    ConstultantDetails["Technology"] = "React Native";
})(ConstultantDetails || (ConstultantDetails = {}));
console.log(RollNumbers);
let parthiRollNum = RollNumbers.Parthi;
let parthTechnology = ConstultantDetails.Technology;
console.log(parthiRollNum);
