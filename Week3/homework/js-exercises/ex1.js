'use strict';
// giveCompliment function with parameter (myname)in it araay inc 10 strings
function giveCompliment(Dima) {
  const compliment = [
    'great',
    'awesome',
    'wonderful',
    'amazing',
    'beloved',
    'fabulous',
    'good',
    'god of Doom',
    'clever',
    'genius',
  ];
  //make random compliment
  const randomCompliment =
    compliment[Math.floor(compliment.length * Math.random())];

  // (tody Compliment);
  console.log(`you are ${randomCompliment} ${Dima}`);
}
giveCompliment('Dima');
giveCompliment('Dima');
giveCompliment('Dima');
