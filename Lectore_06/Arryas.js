//*How to Declare Array
let Arr = ["ajinkya", "patil", 2499, true, 1, 2, 3, 4, 5, null];

// console.log(Arr);
// console.log(Arr[0]);

//****************Methods*******************/
const newArr = [1, 2, 3, 4, 5, 6, 7];

//!Push
//?Method it is use the Add element in last position if array
// console.log(newArr.push(8));

//!Pop
//?Method it is use the remove element in last position if array
// console.log(newArr.pop());

//!unshift
//?it is use the add the element in first position of in array
// console.log(newArr.unshift(0));

//!shift
//?it is use the Remove the element in first position of in array
// console.log(newArr.shift());

//!difference between Slice and Splice
//!slice
//?it is use the show the particular part of in array
// console.log(newArr.slice(0, 4));

//!splice
//?it is use the show the particulars part and remove the elements of in array
// console.log(newArr.splice(0, 4));

// console.log(newArr);

//!join
//?it is use the convert the arrays in string from
// let myNew = newArr.join();

// console.log(newArr);
// console.log(myNew);

//!concat
//?it is use to concat 2 array and return the new array
let Actor = ["ajay_devghan", "Akshay_kumar", "Rohti_shetty"];
let Actors = ["janvi_kapor", "sammantha", "arya_stack"];

let movie = Actor.concat(Actors);
console.log(movie);

//!spread(...)
let Singam_3 = [...Actor, ...Actors];
console.log(Singam_3);
