// Callback functions
// Platform for example
// reasons to use callback functions
// Using callbacks, especially in conjunction with functions, provides a more flexible and reusable way to perform operations on elements of a list. Callbacks allow you to customize the behavior of the function without modifying its core logic. Reusability, Flexibility, Abstraction and Conciseness

// .map method 

// let movies = ["Back to the Future", "Step Brothers", "Guardians of the Galaxy"]

// let newMovies = movies.map( (movie) => { return movie.concat(" 2") } )

// console.log(newMovies)

// .filter method 

// let movies = ["Back to the Future", "Step Brothers", "Guardians of the Galaxy", "Dumb Money", "Dawn of the Dead"]

// let newMovies = movies.filter( (movie) => movie[0] == "D"? movie : null )

// console.log(newMovies)

// .forEach method 

// let foods = ["Pizza", "Donut", "Sandwich"]

// foods.forEach( (unicorn, index) => {
//     console.log(unicorn)
//     console.log(index)
//     // console.log(array)
// })

// Object.freeze() function 
// platform example 

// const movies = Object.freeze(["Back to the Future", "Step Brothers", "Guardians of the Galaxy"])

// movies[0] = "Tropic Thunder"

// console.log(movies)

// Sort walkthrough 

const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);

const sortedGroceries = [ ...groceryList].sort( (a, b) => a.item > b.item ? 1 : -1 );
console.log(sortedGroceries)


// Returning 1 means that the element a should be placed after the element b in the sorted order.
// Returning -1 means that the element a should be placed before the element b in the sorted order.
// Returning 0 means that the relative order of a and b remains unchanged.