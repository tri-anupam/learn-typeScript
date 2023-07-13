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
var nanValue = NaN;
console.log(nanValue);
//*String Type
//?Any value under single of double quotes are treated as string, Also any exp. result string as output.
var myName = "Anupam Tripathi";
var myFirstName = 'Anupam';
var myLastName = 'Tripathi';
console.log("".concat(myName, " ").concat(myFirstName, " ").concat(myLastName));
//todo String length
// let sentence:string = "welcome to earth"
// let sentenceLength:number = sentence.length;
// console.log(sentence,sentenceLength)
//todo UPPERCASE and lowercase
var sentence = "Welcome To Earth";
var upperCaseText = sentence.toUpperCase();
console.log(upperCaseText);
//todo substring
var longSentence = "Welcome to the world of humans where human ruled over animals they are killed them for his purpose and if animals are going to extinct then they save them.";
var subString = longSentence.substring(0, 50);
console.log(subString);
//todo string comparison
var str1 = "hi there";
var str2 = "hi there";
console.log(str1.match(str2));
//todo string Template
var customerName = "Raju";
var age = 20;
console.log("".concat(customerName, " is ").concat(age, " years old."));
