// {} ----this means scope ,,if{}---iske andar content ko bolte block scope
// if ke bahar wale ko bolte haii global scope 

let a = 10
const b = 20
var c = 30
if(true) {
    let a = 2000
    // var c = 3000
    const b = 2000
    console.log("INNER :" ,a)
}

// console.log(a);
// console.log (b);
// console.log (c);

// //
  function one(){
    const username = "Bhavya"
  function two(){
    // const website = "youtube"
  console.log(username);
   }
    // console.log(website); 
    // -----this line will show error as bracket is closed and 
    // similarly two will also not execute

    two()
}
one()
if (true){
    const username = "Bhavya"
    if(username === "Bhavya"){
        const website = "youtube"
        console.log(username  +   website);

    }
    // console.log(website)
}
// console.log(username)