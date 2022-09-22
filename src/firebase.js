// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCLHnhYhc1M96L9pViAPXcUCHBFDR7Cv2g",
    authDomain: "clone-32eef.firebaseapp.com",
    projectId: "clone-32eef",
    storageBucket: "clone-32eef.appspot.com",
    messagingSenderId: "670896709538",
    appId: "1:670896709538:web:d02008ebe067f8d9dd1cfb",
    measurementId: "G-TZX7XFJDJX" 
    };

    // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); //firebase.initialize

    // Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);   //firebaseApp.firestore();

    // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);      //firebase.auth();

export {db, auth };