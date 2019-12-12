function creditCard(ccNum) {
  //Declare varibles
  let sum = 0;
  //set count for equality
  let count = 0;
  // loop to get all values in the string
  for (let i = 0; i < ccNum.length; i++) {
    //sum
    sum += parseInt(ccNum[i]);
    //equality
    if (ccNum[i] === ccNum[0]) {
      count++;
    }
  }

  if (
    //only numbers with out symbols characters or letters/globel
    !/\d{16}(~\W[a-zA-Z])*$/g.test(ccNum) ||
    //every number must be 16.lenght
    ccNum === 16 ||
    // // substring(-1)
    //last character must be even number
    ccNum.slice(-1) % 2 !== 0 ||
    sum <= 16 ||
    count === 16
  ) {
    console.log('invalid number');
  } else console.log('vaild number');
}

creditCard('9999777788880000');
creditCard('6666666666661666');
creditCard('a92332119c011112'); //(invalid characters)
creditCard('4444444444444444'); //(only one type of number)
creditCard('1111111111111110'); //(sum less than 16)
creditCard('6666666666666661'); //(odd final number)
