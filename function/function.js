// /** 
//  * functions allow us to reuse code
//  */
//  //const makeDrinkOfVimto = () => { //arrow function
//         //ES6 syntax}

// let kettleBoiled = true 

// const makeDrinkOfVimto = () => {
//     if (kettleBoiled) {
//         console.log ("pour the drink then... i'm waiting.")
//         kettleBoilded = false
//     }
// else {
//     console.log("blah")
//     kettleBoiled = true
// }
// }

// const withdrawl = (withdrawlAmount, accountNumber) => {

//     console.log(`Withdrawing ${withdrawalAmount} from ${accountNumber}`)
// // we need a bank balance and need to check that there is enough money in the account.
// }

// withdrawl(123456, 500)

// let numberOne 
// let numberTwo

// const mulitplyNumber = (numberOne, numberTwo) => {
//     let total = numberOne + numberTwo 
//     let mulitply = numberOne * numberTwo 
//     if (total %2 == 0) {
//     console.log(total)}
//     else {
//         console.log (mulitply)
//     }
// }

// mulitplyNumber(8, 10)

// const array1 = [8,9,5,7,8,9,7,9,8,0,4]

// console.log(Math.min(...array1))


const myFunc = (currency='GBP', lang='en') => {
    // if (typeof currency == 'undefined') {
    // currency = 'GBP';
    // }
    // if (typeof lang == 'undefined') {
    // currency = 'en';
    // }
    console.log(currency);
    console.log(lang);
    }
    myFunc();