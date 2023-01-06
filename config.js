import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtcsRKZT3M9m5-USU3d4OC-Y6b26OSj3k",
  authDomain: "todoapp-696969.firebaseapp.com",
  projectId: "todoapp-696969",
  storageBucket: "todoapp-696969.appspot.com",
  messagingSenderId: "744321737470",
  appId: "1:744321737470:web:6e669a69d5c1e81b617baf",
  measurementId: "G-8V5SD8VGK4"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


export {firebase}
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);