// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFt6wUK2ZhYe-op_s9fhK31pptNY8bCPA",
  authDomain: "smart-dusbin.firebaseapp.com",
  projectId: "smart-dusbin",
  storageBucket: "smart-dusbin.appspot.com",
  messagingSenderId: "278427841600",
  appId: "1:278427841600:web:d4d6ed3964c74929b91ba5",
  measurementId: "G-FWFCCFM47T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
