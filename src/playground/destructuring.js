// Objects destructuring


// const person = {
//   name: "Arkadiusz",
//   age: 26,
//   location: {
//     city: 'Barcelona',
//     temp: 22
//   }
// }
// const { name: firstName = 'Anonymus', age } = person;
// console.log(`${firstName} is ${age}.`);


// const { temp: temperature, city } = person.location; 
// if (temperature && city) {
//   console.log(`It' ${temperature} in ${city}`);
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// }

// const { name: publisherName = "self-published" } = book.publisher
// if (publisherName) {
//   console.log(`The book has been ${publisherName}`);
// } else {
//   console.log(`The book was ${publisherName}`);
  
// }
//Penguin, Self-Published

//if there is a valid publisher u use penguid if not self-published


//Arrays Destructuring 

const address = [];

const [,, state = 'New York'] = address;
console.log(`You are in  ${state}`);



const item = ['Coffee (hot)', '$2.00', '$3.50', '$4.50'];
const [hot, , medium] = item;
console.log(`A medium ${hot} costs ${medium}`);