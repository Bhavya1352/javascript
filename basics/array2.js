const fruits = ["apple","guava","banana"]
const color = ["Red" , "yellow" , "green" ]
fruits.push(color)
// console.log(fruits)
// const allHers = fruits.concat(color)
// console.log(all);
const all_Hers =[...fruits,...color]
// console.log(all_Hers);
const anotherArr =[1,2,3[4,5],6,[8,9]]
const real_another_Arr =anotherArr.flat(Infinity)
// console.log(real_another_Arr)
console.log(Array.from("bhavya"))
let score1 = 300
let score2 = 200
let score3 = 400
console.log(Array.of(score1,score2,score3));

