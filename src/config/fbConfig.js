import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyBQtdSpPhIE-t9xkK9CAPeEhnP6AV-T8hE",
  authDomain: "mario-plan-a23c1.firebaseapp.com",
  databaseURL: "https://mario-plan-a23c1.firebaseio.com",
  projectId: "mario-plan-a23c1",
  storageBucket: "mario-plan-a23c1.appspot.com",
  messagingSenderId: "525088098170",
  appId: "1:525088098170:web:582ce211385392a5fa38c3"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 