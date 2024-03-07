


const isPali = word => [...word].reverse().join("") == word? true : false



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