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
  isSingle: true,
  location: {
    city: "Barcelona",
    country: "Spain"
  }
});
// database.ref().set('This is my data.');

database.ref('age').set(27);
database.ref('location/city').set("Amsterdam");
database.ref('attributes').set({
  height: 178,
  weight:78
});