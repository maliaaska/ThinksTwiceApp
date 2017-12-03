import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyACXaQmFZvA5Yw2RzNwSfRpar-EHJ-cbKk",
  authDomain: "thinktwice-bcb0d.firebaseapp.com",
  databaseURL: "https://thinktwice-bcb0d.firebaseio.com",
  projectId: "thinktwice-bcb0d",
  storageBucket: "thinktwice-bcb0d.appspot.com",
  messagingSenderId: "463345727650"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: "Arkadiusz Milewski",
  age: 26,
  stressLevel: 6,
  job: {
    title: 'sofware developer',
    company: 'Google'
  },
  location: {
    city: "Barcelona",
    country: "Spain"
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed.', e);
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': "Seattle"
});

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('that has been saved correctly- is Single is removed');
//   }).catch((e) => {
//     console.log('Oooops, something went wrong!', e);
//   });