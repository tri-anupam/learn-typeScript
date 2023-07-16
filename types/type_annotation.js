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
// let nanValue = NaN;
// console.log(nanValue);
//* String Type
//?Any value under single of double quotes are treated as string, Also any exp. result string as output.
// let myName = "Anupam Tripathi";
// let myFirstName = 'Anupam'
// let myLastName = 'Tripathi'
// console.log(`${myName} ${myFirstName} ${myLastName}`)
//todo String length
// let sentence:string = "welcome to earth"
// let sentenceLength:number = sentence.length;
// console.log(sentence,sentenceLength)
//todo UPPERCASE and lowercase
// let sentence:string = "Welcome To Earth"
// let upperCaseText:string = sentence.toUpperCase();
// console.log(upperCaseText)
//todo substring
// let longSentence:string = "Welcome to the world of humans where human ruled over animals they are killed them for his purpose and if animals are going to extinct then they save them."
// let subString:string = longSentence.substring(0,50);
// console.log(subString);
//todo string comparison
// let str1:string = "hi there";
// let str2:string = "hi there"
// console.log(str1.match(str2))
//todo string Template
// let customerName:string="Raju";
// let age:number = 20;
// console.log(`${customerName} is ${age} years old.`)
//*Boolean Type
//? In TypeScript, the boolean type represents a value that can be either true or false. It is one of the basic primitive types in the language.
// let isMyNum:boolean = false;
// console.log(isMyNum)
//todo Write a typescript function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
//! By simple function
// function isEven(num:number):boolean{
//     return num%2===0
// }
// console.log(isEven(10))
//! By arrow function
// const even = (num:number):boolean =>{
//     return num%2===0;
// }
// console.log(even(11))
//todo Write a typescript function called isDivisibleBy4and8 that takes a number as a parameter returns true if the number is divisible by both 4 and 8.
// const divisibelBy4And8 = (num:number):boolean =>{
//     return num%4===0 && num%8===0
// }
// console.log(divisibelBy4And8(32))
//*BigInt Type
//? It is a built-in type that allows you to work with numbers that are larger than the range supported by the regular number type. 
//? BigInt literals are written by appending the n suffix to an integer literal. 
//? In JS we can't read the whole numbers beyond 2 raise to power 53.
// let bigNumber:bigint = 99999999999999999999999n;
// console.log(bigNumber)
//* Any Type
//?The any type is the most flexible type in Typecript. It essentially turns of all type checking for the variable or expressions it is applied to.
// let data:any = "hello world" //! string type
// console.log(data)
// data = 123;              //! number type
// console.log(data)
// data = true;            //! boolen type
// console.log(data)
//! useCase
//? Working with Dynamic Data: When dealing with data from dynamic source like user inputs, network response, or deserialized JSON objects, the any type can be useful.
//?Migration from JavaScript: When migrating an existing javaScript to typeScript, using the "any type" can be convenient way to quickly annoate variable and fucntions without immediately specifying their precise type.
//* Unknown Type
//? The unknown type is safer alternative to any because it still enforces type checking and type safety.
//? Variables of type unknown can hold values of any type, but you most perform type checks or type assertions before using them in specific ways.
// let myNum:unknown = 5;
// myNum = "hello";
//* Type Inference
//? Type inference in TypeScript refers to the ability of the TypeScript compiler to automatically determine and assign types variables, expression, and function return values based on their usage and context in the code.
var myName = "anupam"; //* The compiler infers the type string for the variable myName.
//! What are the some best practices for using type inference in TypeScript?
//? Use type inference for simple case where the assigned value clearly indicates the intended type.
//? When in doubt, provide explicit type annotations to amek your intentions clear.
//? Avoid relying too heavily on type interence when the assigned value is complex or ambiguous. 
//? Regularly review and refactor your code to ensure the inferred types aligh with your intentions.
//todo
var message = "Hello, TypeScript!";
//* The compiler infers the type string for the variable message.
console.log(message);
var areaOfRectangle = function (l, b) { return l * b; };
console.log(areaOfRectangle(2, 3));
