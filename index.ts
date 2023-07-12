// Welcome to TypeScript

//Define a variable
let num1:number= 3;  //We have to assign it with it's type.
console.log(num1)


function sum(a:number,b:number):number{  //you have to assign type of arguments and function return type.
    return a+b;
}
console.log(sum(2,6))

//----->> What is tsc config file?
//----->> The tsconfig.json file specifies the root files and the compiler options required to compile the project.

// ----noEmitOnError--- this command is in tsconfig file which is used when there is error in ts file it does not produce js file.