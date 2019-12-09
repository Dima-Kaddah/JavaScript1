//Create an array with 2 predefined strings
let shoppingCart = ['bananas 🍌', 'Milk🥛'];
//rite a function named addToShoppingCart.It takes in 1 argument
function addToShoppingCart(grocery) {
  //Add grocery item to array
  shoppingCart.push(grocery);
  //more than 3 remove the first one in the array
  if (shoppingCart.length > 3) {
    shoppingCart.shift();
  }
  console.log(`You bought ${shoppingCart}`);
}
//Call the function 3 times
addToShoppingCart('Watermelon 🍉');
addToShoppingCart('Cheese 🧀');
addToShoppingCart('Kiwi 🥝');
