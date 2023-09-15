import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Rest of your code

// Initialize Firebase with your project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsk11I-qbaymwD4OUHVCQDDRi6aSnFyz0",
  authDomain: "redirect-to-smartdustbin.firebaseapp.com",
  databaseURL:
    "https://redirect-to-smartdustbin-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "redirect-to-smartdustbin.appspot.com",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const logsRef = ref(database, "logs");
const newDataRef = push(logsRef);
set(newDataRef, "Website loaded");
// Set the status in Firebase when the website is loaded

// Redirect to the desired URL
window.location.href = "https://smart-dusbin.web.app/";
