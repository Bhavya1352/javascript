let myArray =[1 ,2,3,4,5,6]
for (const num of myArray) {
    // console.log(num)
}

const greetings = "hello World! "
for (const greet of greetings) {
    // console.log(`each char: ${greet}`)
}
// maps -- it includes unique value not duplicate
const map = new Map()
map.set('IN' ,"India")
map.set('USA' , "United States of America")
map.set('IN' , "India")


// console.log(map);
for (const [key , value] of map) {
    // console.log( key , ':-' , value);
    
}
const coding = ["js" , "ruby" ,"cpp" , "python"]
coding.forEach(function (val){
    console.log(val);
    
})

