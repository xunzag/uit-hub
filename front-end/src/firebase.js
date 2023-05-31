// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmSmXeRLSYLgPPScPi-1vpf2mJXVdsU60",
  authDomain: "uit-student-hub.firebaseapp.com",
  projectId: "uit-student-hub",
  storageBucket: "uit-student-hub.appspot.com",
  messagingSenderId: "858031895249",
  appId: "1:858031895249:web:4434b7a67f831bbf6d8bf0",
  measurementId: "G-7HHVX07DWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);