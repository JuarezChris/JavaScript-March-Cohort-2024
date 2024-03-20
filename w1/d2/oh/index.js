


const isPali = word => [...word].reverse().join("") == word? true : false

// const palidrome = (word) => {
//     console.log(word)
//     return word.split("").reverse().join("") == word
// }

function handleSubmit(event){
    event.preventDefault()
    console.log(event.srcElement.word.value)
    // console.log(document.getElementById("word").value)
    let word = event.srcElement.word.value.toLowerCase()
    if(isPali(word)){
        document.getElementById("results").textContent = "Yes Congrats!!"
    }
    else {
        document.getElementById("results").textContent = "No try again!"
    }
}

// function handleSubmit(event){
//     event.preventDefault()
//     console.log(event.srcElement.word.value)
//     // console.log(document.getElementById("word").value)
//     let word = document.getElementById("word").value.toLowerCase()
//     if(isPali(word)){
//         document.getElementById("results").textContent = "Yes Congrats!!"
//     }
//     else {
//         document.getElementById("results").textContent = "No try again!"
//     }
// }


// function palidrome(word){
//     let isValid = true
//     for(let i = 0; i < word.length/2; i++){
//         // console.log(`i: ${word[i]}, end: ${word[word.length-i-1]}`)
//         if(word[i] != word[word.length-i-1]){
//             isValid = false
//         }
//     }
//     return isValid
// }