//Type aliases
type Course = "MAD" | "Cloud" | "Big Data"

type Employee = {
    id: number,
    name: string,
    department: string,
    course: Course
}

let emp1: Employee = {
    id: 1,
    name: "Jhon",
    department: 'Mobile Apps',
    course: "MAD"
}

type Age = 45 | 50 | 60

//literal type
let age: Age = 50
let course: Course = "MAD"


//Recursive types
type NestedArray = number | NestedArray[]
type NestedStringArray = number | string | NestedStringArray[]


let numbers: NestedArray = [1, 2, 3, 4, 5, [123, [1], [2]]]
let stringss: NestedStringArray = [["1", [12, 12, 23]], "2", 3, 4, 5, [123, [1], [2]]]

//Type Casting

let stringifyEmployee: string = JSON.stringify(emp1)

console.log(typeof emp1)
const getEmployee = (employeeObject: string) => {
    let empData = JSON.parse(employeeObject)
    // type caseing
    //old way
    // return (<Employee>empData).name
    //Modern 
    return empData as Employee
}

console.log(getEmployee(stringifyEmployee))

//Type guard??

//Union type
let tip: number | string = 10

const calculateTip = (tip: (string | number)): number => {
    let numOfDays = 30
    //type guard
    if (typeof tip == 'number') {
        return numOfDays * tip
    } else {
        return numOfDays * parseInt(tip)
    }
}

//Intersaction types
type Item = {
    readonly id: number,
    price: string,
    title: string,
    description?: string
}
type Discount = {
    discount: () => void
}

type Product = Item & Discount

let item1: Product = {
    id: 1,
    price: '10US',
    title: 'Learn Typescript',
    discount: () => {

    },
    description: 'Test Description'
}

let item2: Product = {
    id: 1,
    price: '10US',
    title: 'Learn Typescript',
    discount: () => {

    }
}

//Function Type

// let printHelloWorld: Function

// printHelloWorld = () => {
//     console.log('Hello World')
// }
//function signature
let printHelloWorld: (message: string, count?: number) => string


printHelloWorld = (mesage, count = 10) => {
    return mesage + count
}

console.log(printHelloWorld("abc"))


//Object literal

// function studentDB(student: { firstName: string }): string {
//     return student.firstName
// }
type Student = {
    fistName: string
}
function studentDB({ fistName }: Student): string {
    return fistName
}

//Generic types

let values: number[] = [1, 2, 3, 5]

//Generic type
let number: Array<number> = []

number = values

let alphaNumber: Array<number | string> = [1, "1", 2, "2"]

type Book<T> = {
    title: T
    author: T
}

const book: Book<number> = {
    title: 10,
    author: 10
}

type Products<T1, T2> = {
    name: T1,
    price: T2
}

const prod: Products<string, number> = {
    name: "MAD",
    price: 100
}


let getArrayLentgh: <T>(array: Array<T>) => number


getArrayLentgh = <T>(array: Array<T>) => {
    return array.length
}

let length = getArrayLentgh(["a", "b", "c"])
