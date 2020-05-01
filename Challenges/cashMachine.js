// change pin ------------------------ working but need to add --------------------
// New to stop the 'please enter pin prompt after 3 attempts and need to include create new pin function. 


let pinCounter = 0
let accountNumber = 9999
let pinNumber = 1111
let balance = 400

const depositCash = (depositAmount) => {
    depositAmount = Number(prompt('Please enter the amount you would like to deposit'))
    let balancePlusDeposit = balance + amount 
    let tryAgain

    if (depositAmount > 250) {
        tryAgain = prompt( 'Sorry, you can only deposit £250 at a time. Would you like to try agian?')
    }
        else if (tryAgain == 'Yes') {
            depositCash() }
        else if (tryAgain == No) {
            goBack()
        }
    
    else if (depositAmount) {
    alert (`thanks for depositing ${depositAmount} your new balance is ${balancePlusDeposit}.`)
    goBack()
    }
}

const toCheckBalance = (balance) => {
    if(balance) {
    alert( `balance is ${balance}`)
    goBack()
    }
}

const withdrawal = (withdrawalAmount) => {
    withdrawalAmount = prompt('How much would you like to withdraw?')
    newBalance = balance - withdrawalAmount
      
            if (withdrawalAmount < 250 && withdrawalAmount < balance) {
            
            alert (`Withdrawing ${withdrawalAmount} from ${accountNumber} new balance ${newBalance}.`)
            goBack()
        } 
            
            if (withdrawalAmount > 250) {
            tryAgain = prompt( 'sorry, you can only withdraw £250 at a time. Would you like to try again?')
                if (tryAgain = 'Yes'){
                    withdrawal() }
                else if (tryAgain = 'No'){
                    goBack()
                }
            }

            if (withdrawalAmount > balance) {      
             alert ('There is not enough money in your bank to complete this action.')
            }
        }

const goBack = (goBackToMainMenu) => {
    goBackToMainMenu = prompt('Would you like to go back to the main menu?')
    if (goBackToMainMenu == 'yes') {
        machineOptions ()
    }
    else if (goBackToMainMenu == 'No') {
        alert('Thank you, have a nice day')
    }
}

const changePin = (newPin) => {
    newPin = prompt('please enter your new pin.')

    if (newPin) {
    alert('Thank you, your pin has been changed.')
    goBack()
    return newPin
    }
    else {
        alert('You must input a number')
    }
}

const blockPin = () => {
    if(pinCounter == 3){
    alert('You have entered the incorrect pin to many times, your account has been blocked.')
    }
}

const machineOptions = (userChoice) => {
    userChoice = prompt('Choose one of the following options. 1.Change pin 2.Check Balance 3.Withdraw 4.Deposit Cash. 5.View transactions 6.Change language ')
    if (userChoice == 1) {
    changePin()
    }
    if (userChoice == 2) {
    toCheckBalance()
    }
    if (userChoice == 3) {
    withdrawal()
    }
    if (userChoice == 4 ){
    depositCash()
    }

    else {
        alert("I haven't made those functions yet.")
    }
}

//This function is the start of the cash machine where the user will have to enter their user info to access other funtions. 

const accessAccount = (userInputAcc, userInputPin) =>{
    userInputAcc = prompt('What is your account number?')
    userInputPin = prompt('Enter Pin Number')

    if (userInputAcc == accountNumber && userInputPin == pinNumber) {
        alert('You have entered your details correctly.')
        console.log("are you working?")
        machineOptions()
    }
    else if (userInputPin != pinNumber && userInputAcc != accountNumber) {
        ++pinCounter
        alert('Incorrect pin.')
        blockPin() 
    }
}

accessAccount()


// //------------------------Change Language and currency----------- WORKING-----------------

// const changeLanguageAndCurrency = (language = 'English', currency = 'GBP') => {
//     console.log(language)
//     language = prompt('What language would you like?')
//     console.log(language)

//     if (language == ('Mandarin')) {
//         alert('language is Mandarin') 
//     }
//     if (language == ('German')) {
//         alert('language is German') 
//     }
//     console.log(currency)
//     currency = prompt('What currency would you like to change to?')
//     console.log(currency)


//     if (currency == ('EUR')) {
//         alert('Currency is now EUR') 
//     }
//     if (currency == ('RMB')) {
//         alert('Currency is now RMB') 
//     }
// }

// changeLanguageAndCurrency()


//---------------------------Withdraw in new currency--------------Working except the 'to upper case' ----------------

// const withdrawAltCurency = (amount, currency) => {
//     amount = prompt('How much would you like to withdraw?')
//     currency = prompt('Which currency would you like your cash in?') 
//     currency.toUpperCase() //not working 

//     if (currency == 'RMB') {
//     alert(`please take your cash ${amount*10}`)
//     }
//     else if (currency == 'USD') {
//     alert (`please take your cash ${amount*3}`)
//     }
//     else {
//     alert (`sorry this machine doesn't have any ${currency}.`)}
     
// }
// withdrawAltCurency()

// //___________________________________Transactions list_____WORKING___________________

// const todaysTransactions = (day) => {
//     day = prompt('What day would you like to see the transactions from?')

//     if (day == 'monday'){
//     alert( 'account was emptied - you have been robbed')
//     }
//     else if (day == 'tuesday'){
//         alert ('account is full to the limit, you won the lottery')
//     }
//     else if (day == 'wednesday'){
//         alert ('withdrawn £30, interest of £20')
//     }
//     else {
//         alert ('That is not a day on this planet')
//     }
// }

// todaysTransactions()
// // -------------------------------------------------------


// const toChangePin = (pin) => {
//     pin = prompt('Please enter pin')
//     pinCounter=0

//     if (pin == '9999') {
//         alert('correct pin') 
//         machineOptions = prompt('Choose one of the following options. 1.Change pin 2.View account 3.View transactions 4.Withdraw Cash 5.Change language 6.Deposit Cash.')
//     }
//     // if (options =="Change pin"){
//     //     prompt('Please enter new pin')
//     //     alert('Your pin has changed')
//     // }

//     pinAttempts :while (true) {

//     if (pin != '9999' && pinCounter < 3) {
//             pinCounter++
//             pin= prompt(`Incorrect pin, Please try again.${pinCounter}`)
//         }

//      else if (pin != '9999' && pinCounter == 3) {
//             alert('to many attempts')
//              break pinAttempts
//         }
//     }
// }
// toChangePin()
