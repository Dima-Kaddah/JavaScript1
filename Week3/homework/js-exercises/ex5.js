//Write a function,takes 1 argument object that contains properties
function calculateTotalPrice(cartForParty) {
  cartForParty = { beer: 20, cola: 3, chips: 10, cheese: 25, win: 30 };
  // make my object values as array
  cartForPartyArry = Object.values(cartForParty);
  // console.log(ob);
  //make sum with reduce accumulator function
  cartForParty = cartForPartyArry.reduce((acc, val) => acc + val);
  console.log(cartForParty);
}
calculateTotalPrice();
