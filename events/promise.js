// for new instance use new
const promiseOne =new promise(function(reject,resolve){
    // do an async task
    // db call cryptography network
},1000)
setTimeout(function(){
console.log('async task is complete')
})

promiseOne.function.then(function(){
    console.log("t is available")
    
})
// then has connection with resolve e
