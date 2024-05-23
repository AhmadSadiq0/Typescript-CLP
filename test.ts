//static type 

let batch: number = 5

let i: number = 10

let j: number = 20

let name: string = 'Tech Consulting'

let isDoable: boolean = true

//Mixed data types

let rollNumber: (number | string | boolean) = 10

let consultants: string[] = ["Parth", "Parthi"]
let rollNumbers: number[] = [1, 2, 3]

let nameAndNumber: (string | number)[] = ["Parth", 1, "Parthi", 2]

let twoDimensional: string[][] = [
    ["Hello"], ["World"]
]

let twoDimensional2: (string | number)[][] = [
    ["Hello"], ["World"], [3]
]

//bad practice and not recomended
let value: any;
value = 2
value = "abc"

//tuple
// define the type of data and also we define the lenght
let t: [string, number] = ["Hello", 1]

//Enums types

//number
//PascalCase
enum RollNumbers {
    Sadaat = 1,
    Parth,
    Parthi
}

//String
//enum is a type
enum ConstultantDetails {
    ID = 100,
    Name = 'Path',
    Technology = 'React Native'
}

console.log(RollNumbers)

let parthiRollNum: RollNumbers = RollNumbers.Parthi


let parthTechnology: ConstultantDetails = ConstultantDetails.Technology

console.log(parthiRollNum)



