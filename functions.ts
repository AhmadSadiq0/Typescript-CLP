//functions in typescript
function add(a: number, b: number): number {
    return a + b
}

let b: number = add(10, 20)

//Arrow functions
let sub = (a: number, b: number): number => {
    let result = a - b
    console.log(result)
    return result
}


const testNever = (): never => {
    while (true) {

    }
}
console.log('Hello World')


function check(a: boolean): void {
    if (a) {
        console.log('a')
    } else {
        console.log(' b')

    }
}
check(true)

let test: any = "abc"

const str1: string = test