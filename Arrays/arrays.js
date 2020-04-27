let shoppingList = ["eggs", "toilet paper", "milk","bread"]
console.log(shoppingList.slice(2))

let numberArray = [0, 1, 3]
let favouriteWebsites = ["google", "ask Jeeves", "Napster"]

let lastItemInFavouriteWebsites = favouriteWebsites.pop()
//console.log(lastItemInFavouriteWebsites)

//favouriteWebsites.push("MySpace","Beebo")
//console.log(favouriteWebsites)

//favouriteWebsites.pop()
//console.table(favouriteWebsites)

//shoppingList.indexOf("eggs");
//console.log(shoppingList)

//shoppingList.shift()
//console.log(shoppingList)

// shoppingList.unshift('sugar','lemons')
// console.log(shoppingList)

// let shoppingListMap = shoppingList.map()
// console.log(shoppingListMap)

console.log(shoppingList.map(x => x + 'ing'))