function sayMyName() {
    // console.log("B");
    // console.log("H");
    // console.log("A");
    // console.log("v");
    
    
    
}
sayMyName ()
// we simply print this it will show nill
// it with paranthesis then it will showoutput
// function ke andar jo value input dete unhe bolte hai parameters
// jo value pass karwate usko arguments
function addTwoNumber(number1 ,number2) {
    // console.log(number1 + number2)
}
addTwoNumber(3, 9)
// return wali line ke baad kuch print nahi hoga
function addTwoNumber(number1 ,number2) {
    // let result =(number1 +number2)
    // return result
    return number1 + number2
    // console.log("bhavya")
}
const result =addTwoNumber(3 ,5)
// console.log("Result:" ,result);
function loginUserMessage (username){
    {
        if(username===undefined){
            // console.log("please enter a username" );
            return
        }
    }
    return`${username} just logged in`
}
// console.log(loginUserMessage("bhavya"));
// {}-- value execute 
// ()-- value check

// ... - means rest operator ( jitna item hai usko packed ek saath ek bundle mein krdo)

function caluclateItemPrice (val1 ,val2 ,...num1){
    return num1
}
console.log(caluclateItemPrice(200 , 5000 ,100000 ,200000000000000))
 const user = {
username: "bhavya",
price: 199
}
// to pass object in function defination neeche-, we dont write user we right anyobject
// anyobject isliye kyuki iska mtlb hai sirf yahi nahi hum koi bhi pass kar sakte hai
// if used prices it will show undefined 
function handleObject (anyObject){
// console.log (`username is ${anyObject.username} and price is ${anyObject.price}`);

}
handleObject(user)

const myNewArray =[200 ,4000 ,8000]

function newArray(getArray){
    return getArray[1]
}
console.log(newArray(myNewArray))