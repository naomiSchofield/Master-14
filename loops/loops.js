//let i = 6
//semi colons are necessary
// variable can be declared like above
// or they can be decalred inside the bracket before the first semi colon. 
// then inside bracket set condition 'while this condition is true, do what ever is inside the bracket' ;i<10
// i++ = instruction (modifier)
// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

// let someString = "       Some text     "
// let trimmedString = someString.trim()
// console.log(trimmedString)

// let numberArray = [0, 1, 2, 3]

// for(let i = 0; i < numberArray.length; i++) {
//     console.log(numberArray[i])
// }

// let shoppingList = ['   eggs','   milk','   food']

// for(let i = 0; i < shoppingList.length; i++) {
//     let item = shoppingList[i]
//    // let trimmedItem = item.trim()
//     //console.log(trimmedItem)
//     shoppingList[i] += 's'
// }

// console.table(shoppingList)

// If we list all the natural numbers below 10 that are 
//multiples of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.


let num = 0

for(let i = 0; i < 1000; i++) {
     if (i%3 == 0) {
        num += i
    }
    if (i%5 == 0){
        num +=i
    }
}
console.log('answer', num)

// Take this string 
// “jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"
//  and print each letter out individually.

let letters = 'jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh'

for (var i = 0; i < letters.length; i++) {
    console.log(letters.charAt(i));
  }


