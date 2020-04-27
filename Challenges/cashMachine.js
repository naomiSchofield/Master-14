// change pin ------------------------ working but need to add --------------------
// New to stop the 'please enter pin prompt after 3 attempts and need to include create new pin function. 

let counter = 0

const toChangePin = (pin, newPin) => {
    pin = prompt('Please enter pin')

    while (true) {

        if (pin == '9999') {
            alert('correct pin') 
            newPin = prompt('Enter New Pin')
            return alert('Your pin has changed')
        }
            
        else if (pin != '9999' && counter < 3) {
                alert('incorrect pin')
                counter++
        }

        else if (pin != '9999' && counter == 3) {
            alert('to many attempts')
            break
        }
    }
}


// ____________Check Balance___________________________


// const toCheckBalance = (userInputAcc, userInputPin) => {
// let accountNumber = 9999
// userInputAcc = prompt('What is your account number?')
// let pinNumber = 1111
// userInputPin = prompt('Enter Pin Number')
// let balance = 400

//     if (userInputAcc == accountNumber && userInputPin == pinNumber) {
//         alert( `balance is ${balance}`)
//     }
//     else if (userInputAcc !== accountNumber && userInputPin == pinNumber) {
//         alert('incorrect account number')
//     }
//     else if (userInputAcc == accountNumber && userInputPin !== pinNumber) {
//         alert('incorrect pin number')
//     }
//     else if (userInputAcc !== accountNumber && userInputPin !== pinNumber) {
//         alert ('All details are incorrect')
    
//     }
// }

// toCheckBalance()

//______________________Withdrawal__________________WORKING!_____________________


// const withdrawal = (withdrawalAmount, accountNumber) => {
//     accountNumber = prompt('What is your account number?')
//     withdrawalAmount 
//     let customerAccountNumber = 9999
//     let balance = 100
//     console.log(accountNumber)

//     if (accountNumber == customerAccountNumber){
//         withdrawalAmount = prompt('How much would you like to withdraw?') 
//         let newBalance = balance - withdrawalAmount
//         if (withdrawalAmount < 250 && withdrawalAmount < balance) {
//         alert (`Withdrawing ${withdrawalAmount} from ${accountNumber} new balance ${newBalance}.`)}  
        
//         if (withdrawalAmount > 250) {
//         alert( 'sorry, you can only withdraw £250 at a time.') }

//         if (withdrawalAmount > balance) {      
//          alert ('There is not enough money in your bank to complete this action.')
//         }}
    
//    else if (accountNumber !== customerAccountNumber){
//         alert('That account number is incorrect.')
//     }
// }

// withdrawal()


// //---------------------Deposit Cash---------------------WORKING-------------------

// const depositCash = (amount) => {
//     amount = Number(prompt('Please enter the amount you would like to deposit'))
//     let balance = 5000 
//     let newBalance = balance + amount 

//     if (amount > 250) {
//         alert( 'Sorry, you can only deposit £250 at a time.')
//     }
//     else {
//     alert (`thanks for depositing ${amount} your new balance is ${newBalance}.`)
//     }
// }
// depositCash()



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