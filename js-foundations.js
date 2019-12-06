// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".


const dividedBy = (number) => {     
    if(number % 3 === 0){
    return number + " is divisible by 3"
} else {
    return number + " is not divisible by 3"
 }
}

console.log(dividedBy(15))
console.log(dividedBy(0))
console.log(dividedBy(385))
console.log(dividedBy(-7))

// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

var helloMe = {
    firstName: "Jose", 
    lastName: "Lopez" ,  
    phone: 123456789 , 
    address: "123 street",
    getData: function(){
        return `Hello, I am ${this.firstName} ${this.lastName}. Here is how you can contact me: ${this.phone} & ${this.address}` 
    }
}
console.log(helloMe.getData())


// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"


let randomSkips = randomNouns.filter((value, index) => {
    return index %2 === 0
})



console.log(randomSkips.join(" "))
// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

 let firstLetterCap = randomNouns.map((value, index) => {
    return value.toUpperCase() 
 })
     
 // I could not for the life of me figure out how to make only the first letter capitalyzed and not the whole word :(
 
  console.log(firstLetterCap)

// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]

let lengthOfEachStr = randomNouns.map((value, index) => {
    return value.length
 })

console.log(lengthOfEachStr)

// -------------------------------------- Consider the variables:
var testString1 = "learn"

var testString2 = "academy"

var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"
// let newArr = [testString1, testString2, testString3].sort()
var testStr1 = testString1.split("").sort()
var testStr2 = testString2.split("").sort()
var testStr3 = testString3.split("").sort()

var testStr4 = testStr1.concat(testStr2,testStr3).sort()
// 


const alphabetSoup = (word) =>{
    return word
} 

console.log(alphabetSoup(testStr1).join(""))
console.log(alphabetSoup(testStr2).join(""))
console.log(alphabetSoup(testStr3).join(""))



// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"
// var testStr4 = [testStr1, testStr2, testStr3]
// var testStr5 = testStr4.sort()

const allVars = (word2) => {
    return word2
}

console.log(allVars(testStr4).join(""))

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"
// var combine =[amounts, animals]

var combine = amounts.map((value, index) => value + " " + animals[index])
console.log(combine.join(" "))


// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

var combine = amounts.map((value, index) => value + " " + animals[index])
    animals !== 1 ? amounts + "s" : animals
   

console.log(combine.join(" "))


