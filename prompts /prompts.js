// let userInput = prompt("Enter Your Name")

// console.log(userInput)

let sign = prompt("What's your sign?");

if (sign.toLowerCase() == "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

while (true) {
    let pin = prompt('Please enter pin')

    if (pin = '9999') {
        alert('correct pin')
        break
    }
    if (pin != '9999') {
        alert('incorrect pin')
    }
}

while(true) {

    let userInput = prompt("Enter your guess")

    let randNum = Math.floor(Math.random()*6)+1

    if (userInput == randNum) {
        alert("You guessed the correct number")
        break
}
    
    else {
        alert("your guess was incorrect")
    
    }
}