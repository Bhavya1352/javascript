// datatype two type
// primitive- call by value 
// 7 Types- string,number boolean null undefined symbol bigint
// non primitive- refrence type
//  object ,array, function

// javascript is dynamic because it can hold variable of diffrent datatypes during runtime.
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);

// memory types- stack (primitve) - we will get variable copy and Heap (non primitive)- we get refrence of orignal value
let youtubename = "bhavya.com"
let anothername = youtubename
anothername= "chailover"
console.log(youtubename);
console.log(anothername);

