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

const chai = function() {
    let userName = "bhavya"
    console.log(this.username)
}

