'use strict';
//from dog years to human years: age of the dog as human
function calculateDogAge(number) {
  if (number !== 0 && number <= 20) {
    console.log(number * 7);
  } else console.log('This is not dog age');
}
calculateDogAge(1);

//just more code for fun ,from human years to dog years: age of human as dog :D lol
function fromHumanToDogAge(human) {
  if (human !== 6 && human <= 120) {
    console.log(Math.round(human / 7));
  } else console.log('this is not in our human age list');
}
fromHumanToDogAge(7);
