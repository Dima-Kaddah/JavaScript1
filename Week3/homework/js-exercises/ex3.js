'use strict';
//function with 4 arguments
const children = [4, 2, 3, 5, 1];
const partner = ['Cansu', 'Tomas', 'Zafen', 'Satoshi', 'Ahmad'];
const locations = ['Lebanon', 'IStanbul', 'Frans', 'Japan', 'Netherland'];
const jobs = [
  '👨🏻‍🚀 astronaut',
  '👨🏻‍⚖️ Judge',
  '👨🏻‍🏫 Teatcher',
  '👨🏻‍🍳 Chef',
  '👨🏻‍🚒 Firefighter',
];
function tellFortune(children, partner, locations, jobs) {
  //Randomly select values from the arrays
  children = children[Math.floor(children.length * Math.random())];
  partner = partner[Math.floor(partner.length * Math.random())];
  locations = locations[Math.floor(locations.length * Math.random())];
  jobs = jobs[Math.floor(jobs.length * Math.random())];
  return `Numder of children 🧒🏻 ${children} Partner name 💘 ‍${partner}Location 🌍 ${locations} Job ${jobs}`;
}

console.log(tellFortune(children, partner, locations, jobs));
