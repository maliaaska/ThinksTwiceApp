import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses')
// .on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnaphot) => {
//    expenses.push({
//     id: childSnaphot.key,
//     ...childSnaphot.val()
//    }); 
//   });
//   console.log(expenses)
// });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
    
    
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Do it like you should',
//   note: 'that is onlu temporary',
//   amount: 1000000,
//   createdAt: 1299
// }); 

// database.ref('notes/-L-XzKpO01AJDqVVmj82').remove();

// database.ref('notes').push({
//   title: 'Course of programming',
//   body: "Just start doin' it"
// });


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company} `)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(22); 
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(70);
// }, 10500);
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
//   }).catch((e) => {
//     console.log('Error fetcing data!!!', e)
//   });

// database.ref().set({
//   name: "Arkadiusz Milewski",
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'sofware developer',
//     company: 'Google'
//   },
//   location: {
//     city: "Barcelona",
//     country: "Spain"
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': "Seattle"
// });

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('that has been saved correctly- is Single is removed');
//   }).catch((e) => {
//     console.log('Oooops, something went wrong!', e);
//   });