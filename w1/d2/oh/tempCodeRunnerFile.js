
const isPali = word => word.split("").reverse().toString() == word? true : false

console.log("tacoca".split("").reverse().join())

console.log(isPali("tacocat"))
console.log(isPali("cat"))
console.log(isPali("racecar"))