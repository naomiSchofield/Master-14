// Take this string “jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh”.

// The word “hi” appears multiple times. Find the first and last occurrence of the word hi and log them to the console.

let jibberish = 'jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh'

let firstHi = jibberish.indexOf('hi')
let lastHi = jibberish.lastIndexOf('hi')
console.log (firstHi)
console.log (lastHi)

// for (let i = 0; i < jibberish.length; i++){
//     if(jibberish[i] == 'h' && jibberish[i+1]) == 'i' {
//         console.log(`the word 'hi' was found at index: ${i}`)

//         break 
//     }

// }
// for (let i = jibberish.length; i > 0; i --){
//     if (jibberish[i] == 'i' && string [i-1] == 'h') {
//         console.log(`the word 'hi' was found at index: ${i-1}`)

//         break
//     }
// }
