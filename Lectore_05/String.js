let name = "Ajinkya";
let Location = "Thane";

//how to print
print = `my name is ${name} i am living in ${Location}`;
console.log(print);

//**************Methods**********************

// //!toUpperCase
const toUpperCase = print.toUpperCase();
console.log(toUpperCase);

// //!toLowerCase
const toLowerCase = print.toLowerCase();
console.log(toLowerCase);

// //!charAt
const charAt = print.charAt(5);
console.log(charAt);

// //!indexOf
const indexOf = print.indexOf("A");
console.log(indexOf);

// //!slice
const slice = print.slice(2, 8);
console.log(slice);

//!trim
let name1 = "      ajinkya            ";
const trim = name1.trim();
console.log(trim);

//!replace
let str = "ajinkya 24";
const str2 = str.replace("24", "2499");
console.log(str2);

//!bold
let bold = name1.bold();
console.log(bold);
