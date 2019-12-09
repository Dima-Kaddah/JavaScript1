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
  console.log(`Numder of children 🧒🏻 ${children}`);
  partner = partner[Math.floor(partner.length * Math.random())];
  console.log(`Partner name 💘 ‍${partner}`);
  locations = locations[Math.floor(locations.length * Math.random())];
  console.log(`Location 🌍 ${locations}`);
  jobs = jobs[Math.floor(jobs.length * Math.random())];
  console.log(`Job ${jobs}`);
}
tellFortune();

//same code useing more variables
// function tellFortune(
//   numberOfChildren,
//   partnerName,
//   geographicLocation,
//   jobTitle,
// ) {
//   let children = [4, 2, 3, 5, 1];
//   let partner = ['Cansu', 'Tomas', 'Zafen', 'Satoshi', 'Ahmad'];
//   let locations = ['Lebanon', 'IStanbul', 'Frans', 'Japan', 'Netherland'];
//   let jobs = [
//     '👨🏻‍🚀 astronaut',
//     '👨🏻‍⚖️ Judge',
//     '👨🏻‍🏫 Teatcher',
//     '👨🏻‍🍳 Chef',
//     '👨🏻‍🚒 Firefighter',
//   ];
//   //Randomly select values from the arrays
//   numberOfChildren = children[Math.floor(children.length * Math.random())];
//   console.log(`Numder of children 🧒🏻 ${numberOfChildren}`);
//   partnerName = partner[Math.floor(partner.length * Math.random())];
//   console.log(`Partner name 💘 ‍${partnerName}`);
//   geographicLocation = locations[Math.floor(locations.length * Math.random())];
//   console.log(`Location 🌍 ${geographicLocation}`);
//   jobTitle = jobs[Math.floor(jobs.length * Math.random())];
//   console.log(`Job ${jobTitle}`);
// }
// tellFortune();
