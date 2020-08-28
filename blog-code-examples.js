const Hamilton = {
    writesLikeHesRunningOutOfTime: true,
    frenemy: "Aaron Burr",

    greeting() {
        console.log(`Pardon me, are you ${this.frenemy}, sir?`)
    }
}

setTimeout(Hamilton.greeting, 1000) // Pardon me, are you undefined, sir?

setTimeout(Hamilton.greeting.bind(Hamilton), 1000) // Pardon me, are you Aaron Burr, sir?
setTimeout(() => Hamilton.greeting(), 1000) // Pardon me, are you Aaron Burr, sir?



const Dug = {
    isGoodBoy: true,
    goodFriend: "tiny mailman",

    sayHi() {
        console.log(`Hello, ${this.goodFriend}!`)
    }
}

setTimeout(Dug.sayHi, 1000) // Hello, undefined!

setTimeout(Dug.sayHi.bind(Dug), 1000) // Hello, tiny mailman!
setTimeout(() => Dug.sayHi(), 1000) // Hello, tiny mailman!





const a // SyntaxError: Missing initializer in const declaration

console.log(a) // ReferenceError: Cannot access 'a' before initialization
console.log(b) // ReferenceError: Cannot access 'b' before initialization

const a = 'Remy'  
const a = 'Linguine' // SyntaxError: Identifier 'a' has already been declared
const b = 'Gusteau'

console.log(a) // 'Remy'
console.log(b) // 'Gusteau'





function saying() {
    let city = "San Diego"

    function burgundySignOff(){
        let privateVar = "Thanks for stopping by."
        console.log(`You stay classy, ${city}.`) // burgundySignOff can access 'city'
    }

    console.log(privateVar) // will cause a ReferenceError due to scope
    return burgundySignOff()
}

saying()


element.addEventListener("click", e => alert('Capturing'), {capture: true})
// or like this
element.addEventListener("click", e => alert('Capturing'), true)






let a // no error thrown, 'a' is undefined

console.log(a) // 'undefined'

sayHi(b) // ReferenceError: Cannot access 'b' before initialization
// no error is thrown for sayHi since it was hoisted to memory during compilation

a = 'hello'
let b = 'bonjour'

function sayHi(greeting) {
    console.log(`${greeting}`) // 'bonjour'
}






function exterminator() {
    cockroachA = "I'm alive!"
    var cockroachB = "I'm trapped!"
}
  
exterminator()

console.log(cockroachA) // I'm alive!
// Accessible as a global variable outside exterminator() function

console.log(cockroachB) // ReferenceError: cockroachB is not defined
// Since it was declared, its confined to the exterminator() function scope 
// We can't print it out outside the confines of the exterminator() function






'merci' === 'Merci' // false, one letter is in caps

'hello' == 'HELLO' // false

14 === 14 // true

7 === '7' // false, different data types

1999 == '1999' // true, the data types will be coerced

(3 - 1) === 2 // true, still the same data type

{} === {} // false, they are objects
