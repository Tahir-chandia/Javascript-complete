// Difference between var , let and const

// var can be redeclared and updated by same name. It is global scope variable

var apple = "fruit";
console.log(apple);

var apple = "fruitjuice";
console.log(apple);
apple = "onlyfruit";
console.log(apple);

// let cannot be redeclared but it was updated. It is not global scope it is block scope variable

let age = 24;
// let age =24 // Syntax error: Identifier  'age' has already been declared
console.log(age);
age = 26;
console.log(age);

// const cannot be redeclared and updated. A block scope variable
// Note ( const always Declared + initialized both)

// const name // Syntax error: Missing initializer in const declaration

// console.log(name); //without declaration ReferenceError: name is not defined

const name = "Tahir";
console.log(name);
