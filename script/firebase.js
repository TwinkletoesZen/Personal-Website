// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbFIRX_2lc4P2Q-7Grf8EmCwY38TOhHTw",
  authDomain: "personal-website-f9753.firebaseapp.com",
  projectId: "personal-website-f9753",
  storageBucket: "personal-website-f9753.appspot.com",
  messagingSenderId: "284111785889",
  appId: "1:284111785889:web:81ca3297404760764245e0",
  measurementId: "G-8RJFKM8NHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);