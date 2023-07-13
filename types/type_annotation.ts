//*➡️➡️➡️ Type Annotation ⬅️⬅️⬅️
//?In TypeScript, type annotation is a way of "explicitly" specifying the type of a variable, function parameter, or function return value.

// let myNum:number=10;
// let myName:string = "Anupam Tripathi";

//TODO Type Annotations are expressed by using a colon(:) followed by the desired type after the variable of function parameter declaration. There can be a space after the colon.

//! Advantages of TypeScript
//? It helps the TypeScript compiler to enforce type checking and provide type safety during development.
//? What Operation could be performed on that variable or value.

//* Number Type
//? The number type represents numeric values, including integers and floating-point numbers.
let nanValue = NaN;
console.log(nanValue);

//*String Type
//?Any value under single of double quotes are treated as string, Also any exp. result string as output.

let myName = "Anupam Tripathi";
let myFirstName = 'Anupam'
let myLastName = 'Tripathi'

console.log(`${myName} ${myFirstName} ${myLastName}`)

//todo String length
// let sentence:string = "welcome to earth"
// let sentenceLength:number = sentence.length;
// console.log(sentence,sentenceLength)

//todo UPPERCASE and lowercase
let sentence:string = "Welcome To Earth"
let upperCaseText:string = sentence.toUpperCase();
console.log(upperCaseText)

//todo substring
let longSentence:string = "Welcome to the world of humans where human ruled over animals they are killed them for his purpose and if animals are going to extinct then they save them."
let subString:string = longSentence.substring(0,50);
console.log(subString);

//todo string comparison
let str1:string = "hi there";
let str2:string = "hi there"
console.log(str1.match(str2))

//todo string Template
let customerName:string="Raju";
let age:number = 20;
console.log(`${customerName} is ${age} years old.`)


