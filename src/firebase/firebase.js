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

firebase.database().ref().set({
  name: "Arkadiusz Milewski"
});