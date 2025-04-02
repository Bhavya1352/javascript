// this------------current context current me jo hota hai  
// currly brackets andar jo hota hai usko kehte current context

const user = {
    username : "bhavya" ,
    price: 9999 ,
   welcomeMessage :function (){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Harsh"
// user.welcomeMessage()

// console.log(this);

// function chai(){
    // console.log(this)
// }
// chai()

//    const chai = function() {
    let userName = "bhavya" ;
    // console.log (this.username);
// }

const chai = () => {
    let userName = "bhavya" 
    // console.log (this.username);
}
// function have their own this content 
// but arrow function does not have 

// const addTwo =(num1 ,num2) =>{
    // return num1 + num2
// }
// console.log(addTwo (3,4))

// 0r  below given is another way of adding
// most used method it is mainly in react
const addTwo = (num1 ,num2) => num1 + num2
console.log(addTwo (3,4))


