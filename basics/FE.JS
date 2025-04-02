// iife- immediately invoked function expressions
(function chai (){
    console.log(`connected`)
})();
// chai()
// ()()---FIRST BRACKET FOR PARAMETER, SECOND FOR EXECUTION

// IFFE- IS USED TO AVOID THE POLLUTION OF GLOBAL SCOPE(V.IMP)
// SEMI COLON IS ALSO VERY IMPORTant to be put at end 
// agar nahi lagayenge toh next code nahi chalega

( () => {
    console.log(`DB CONNECTED TWO`);
    

})()
