const A = "Const is unchangeable variable";
// A = 2 => Uncaught TypeError: Assignment to constant variable

var x = 'global'
let y = 'global'
console.log("${this.x}") // => global
// console.lot(this.y) => undefined

let name = 'Lam Pham';
let greeting = `I'm ${name}`;

console.log(greeting);

function dumb() {
    var x = 1
    if (true) {
        var x = 2
        console.log(x) // => 2
    }
    console.log(x) // => still 2
}

function anotherDumb() {
    let x = 1
    if (true) {
        let x = 2
        console.log(x) // => 2
    }
    console.log(x) // => 1
}

function dumbVarLoop() {
    for (var i = 0; i < 3; ++i) {
        setTimeout(() => console.log(i, " "), 1000) // Arrow Function
    }
    // output: 3 3 3
}

function dumbLetLoop() {
    for (let i = 0; i < 3; ++i) {
        setTimeout(() => console.log(i, " "), 1000)
    }
    // output: 0 1 2
}