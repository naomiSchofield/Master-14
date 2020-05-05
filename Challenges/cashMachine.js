// change pin ------------------------ working but need to add --------------------
// New to stop the 'please enter pin prompt after 3 attempts and need to include create new pin function. 



let balance = 400

const goBack = (goBackToMainMenu) => {
    goBackToMainMenu = prompt('Would you like to go back to the main menu?')
    if (goBackToMainMenu == 'Yes') {
        machineOptions ()
    }
    else
        alert('Thank you, have a nice day')
    
}

const goBackMandarin = (goBackToMainMenu) => {
    goBackToMainMenu = prompt('您要返回主菜單嗎？')
    if (goBackToMainMenu == 'Yes' || goBackToMainMenu == '是') {
        machineOptions ()
    }
    if (goBackToMainMenu == 'No' || goBackToMainMenu =='沒有') {
        alert(' 感謝您有一個愉快的一天')
    }
}

const goBackGerman = (goBackToMainMenu) => {
    goBackToMainMenu = prompt( "Möchten Sie zum Hauptmenü zurückkehren?")
    if (goBackToMainMenu == 'Yes' || goBackToMainMenu == 'Ja') {
        machineOptions ()
    }
     if (goBackToMainMenu == 'No' || goBackToMainMenu == 'Nein') {
        alert('Danke, schönen Tag noch')
    }
}


const machineOptions = (userChoice) => {
    userChoice = prompt('Choose one of the following options. 1.Change pin 2.Check Balance 3.Withdraw 4.Deposit Cash. 5.View transactions 6.Change language 7.Change Currency')
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
    if (userChoice == 5){
    todaysTransactions()
    }
    if (userChoice == 6){
    changeLanguage()
    }
    if (userChoice == 7){
    changeCurrency()
    }
    else {
    goBack
    }

}

const depositCash = (depositAmount) => {
    depositAmount = Number(prompt('Please enter the amount you would like to deposit'))
    let balancePlusDeposit = balance + depositAmount 
    let tryAgain

    if (depositAmount > 250) {
        tryAgain = prompt( 'Sorry, you can only deposit £250 at a time. Would you like to try agian?')
    }
        if (tryAgain == 'Yes') {
            depositCash() }
        else if (tryAgain == 'No') {
            goBack()
        }
    
    else if (depositAmount) {
    alert (`thanks for depositing ${depositAmount} your new balance is ${balancePlusDeposit}.`)
    goBack()
    }
}

const toCheckBalance = () => {
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

//This function is the start of the cash machine where the user will have to enter their user info to access other funtions. 

const todaysTransactions = (day) => {
    day = prompt('What day would you like to see the transactions from?')

    if (day == 'Monday'){
    alert( 'account was emptied - you have been robbed')
    goBack()
    }
    else if (day == 'Tuesday'){
        alert ('account is full to the limit, you won the lottery')
        goBack()
    }
    else if (day == 'Wednesday'){
        alert ('withdrawn £30, interest of £20')
        goBack()
    }
    else {
        goBack()
        }
}

const changeLanguage = (language = 'English') => {
    console.log(language)
    language = prompt('What language would you like? The options are German (enter 1) or Mandarin (enter 2).')
    console.log(language)

    if (language == ('2')) {
        alert('语言现在是普通话') 
        goBackMandarin()
    }
    if (language == ('1')) {
        alert('Die Sprache ist jetzt Deutsch') 
        goBackGerman()
    }
}
const changeCurrency = (currency = 'GBP') => {
    console.log(currency)
    currency = prompt('What currency would you like to change to, the currencies available are EUR and RMB?')
    console.log(currency)

    if (currency == ('EUR')) {
       let EURBalance = balance * 1.2
        alert(`Currency is now EUR. Your balance is now ${EURBalance}EUR`) 
        goBack()
    }
    if (currency == ('RMB')) {
        let RMBBalance = balance*10
        alert(`Currency is now RMB. Your balance is now ${RMBBalance}RMB`) 
        goBack()
    }
}


let pinCounter = 1
let accountNumber = 9999
let pinNumber = 1111

const blockPin = () => {
    console.log("I am working")

    if(pinCounter < 3){
    ++pinCounter
    alert('Try again.')
    accessAccount()
    }

    else 
    alert('You have entered the incorrect pin to many times, your account has been blocked.') 
      
}

const accessAccount = (userInputAcc, userInputPin) =>{
    userInputAcc = prompt('What is your account number?')
    userInputPin = prompt('Enter Pin Number')

    if (userInputAcc == accountNumber && userInputPin == pinNumber) {
        alert('You have entered your details correctly.')
        machineOptions()
    }

    else if (userInputPin != pinNumber) {
        console.log(pinCounter)
        alert('Incorrect details.')
        blockPin() 
    }
}
accessAccount()