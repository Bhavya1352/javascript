// object 
// collection of propeerties and methods

// parts of oop 
// instances(new,this)
// constructor function
// prototypes
// classs

// 4 pillars-
// abstraction-- details ko hide krna
// fetch mtlb hide krdeGA
// polymorphism- is allows to change code whn new object are added
// inheritance
// encapsulation - wraper laga dena mtlb data hide ho jaaata hai na
const user = {
    username :"bhavya" ,
    count : "24" ,
    isLoggedIn : "yes" ,
    
    getName :function(){
        // console.log("expected data from entry");
        // console.log('userName :${this.username}');
        console.log(this);
        
        
        
    }
}
console.log(user.username);
console.log(user.count);
console.log(user.getName());


