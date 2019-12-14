'use strict';
//function with 4 arguments
function tellFortune(children, partner, locations, jobs) {
  children = [4, 2, 3, 5, 1];
  partner = ['Cansu', 'Tomas', 'Zafen', 'Satoshi', 'Ahmad'];
  locations = ['Lebanon', 'IStanbul', 'Frans', 'Japan', 'Netherland'];
  jobs = [
    '👨🏻‍🚀 astronaut',
    '👨🏻‍⚖️ Judge',
    '👨🏻‍🏫 Teatcher',
    '👨🏻‍🍳 Chef',
    '👨🏻‍🚒 Firefighter',
  ];
  //Randomly select values from the arrays
  children = children[Math.floor(children.length * Math.random())];
  partner = partner[Math.floor(partner.length * Math.random())];
  locations = locations[Math.floor(locations.length * Math.random())];
  jobs = jobs[Math.floor(jobs.length * Math.random())];
  return `Numder of children 🧒🏻 ${children} Partner name 💘 ‍${partner}Location 🌍 ${locations} Job ${jobs}`;
}
console.log(tellFortune());
