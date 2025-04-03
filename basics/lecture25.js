// javascript execution context 
// 1) global execution context- 
// jaise hi hum code dete hai toh global execution jarrur banta hai 
// aur usko variable this  me rakhte hai
// aur ye sab enviornment node react sabke liye  
// browswer - this value window object aati 
// javascript -- single threaded

// 2) functional execution context-
// 3) eval execution context-

// how code run--
// two phase =
// memory creation phase- isme variables jo bhi hote unhe bas rakha jata haii
// execution phase -( +,- ye sab yahan hotaa)


// for example---
let val1 = 10
let val2 = 5
function addNum(num1 ,num2){
    let total = num1 + num2
return total
}
let result1 =addNum(val1 , val2)
let result2 =addNum(10,2)

// steps --- step by step check and write
// 1) memory creation phase- val1,val2 =undefined  addNum =defination ,result1,result2=undefined
// 2) execution phase-val1 ,val2 =10,5 line no 21 to 23 =nothing