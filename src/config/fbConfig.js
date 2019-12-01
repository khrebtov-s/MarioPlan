import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBB2_IAh3FTmzMu2sXakwLVFwrgmiZ5rBE",
    authDomain: "net-ninja-marioplan-ca748.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-ca748.firebaseio.com",
    projectId: "net-ninja-marioplan-ca748",
    storageBucket: "net-ninja-marioplan-ca748.appspot.com",
    messagingSenderId: "1059209265473",
    appId: "1:1059209265473:web:f7db4dca241ea098f321c0",
    measurementId: "G-K2DRREX5N1"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;