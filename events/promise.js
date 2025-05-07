// three states-
// pending
// fulfiled
// rejected
// if response will be there then()
// if Error then catch()
// or finally ////////////////////
// then has relation with  direct resolve
// new Promise(function(resolve ,reject){
    // setTimeout(function(){
//   console.log("task completed")
    // resolve()
    // }, 1000)
// }).then(function(){
    // console.log("it happend");
    // })
const promiseOne =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({ username :"bhavya", email: "bhavya@goggle.com"})
    })
})
promiseOne.then(function(user){
    console.log(user);
    
})
