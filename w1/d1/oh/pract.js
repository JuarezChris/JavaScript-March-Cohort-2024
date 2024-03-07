
// let person = "Fred"

let arr = [10, 29, 31, 24]

console.log(arr)
// arr.push(10)
arr[arr.length] = 10
console.log(arr)

// console.log(arr[2])

let person = {
    name: "Fred",
    age: 31,
    isHuman: true
}

// console.log(person["age"])

for(let key in person){
    console.log(person[key])
}

function addToPerson(key,value){
    person[key] = value
}
console.log(person)
addToPerson("fav_food", "Pizza")
console.log(person)

for(let i = 0; i <= 5; i++){
    console.log(i)
}

let age = 18

if( age >= 21){
    console.log("Meets age requirement")
}
else{
    console.log("Too young!")
}

