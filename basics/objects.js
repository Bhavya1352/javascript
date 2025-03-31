// object- literals,constructor
// literals- singelton nahi banta haii
// constructor-isme singelton  object banta hai 
const mySym =Symbol("key1") 
const jsUser ={
    name : "bhavya",
    "full Name": "Bhavya Mishra",
    [mySym]: "mykey1",
    age: "20",
    location:"jaipur",
    email:"bhavya@jnejnj.com",
    lastLoginday: ["monday","tuesday"],

}
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym])
jsUser.email="bhavya@.com"

// Object.freeze(jsUser)
// freeze means no changes can be made inside and it is locked
jsUser.email ="bhavya@google.com"
// console.log(jsUser)
// jsUser.greeting =function(){
    // console.log("Hello Js user");

// console.log(jsUser.greeting());

// const tinderUser =new Object()--- SINGELTON Object 
// const tinderUser ={} -- non singelton 

// part2
const tinderUser = {}
tinderUser.id ="123abc"
tinderUser.email ="bhavya@goggle.com"
tinderUser.name = "bhavya"

// console.log(tinderUser);
const regularUser = {
    email: "bhavya@.com" ,
   fullname: {
    Userfullname:{
   firstname : "bhavya",
        Lastname : "Mishra"
    }
}
}
// console.log(regularUser.fullname);

const obj1 ={1 :"a" ,2:"b"}
const obj2 ={3 :"a", 4:"b"}

// const obj3 =Object.assign(obj1,obj2,{}) 
// or we can Write 
const obj3 = {...obj1,...obj2}
console.log(obj3)





