// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyB-M-H1Y74ADief8bBGTAmzvGL467IEXT0",
    authDomain: "expensetracker-10c5e.firebaseapp.com",
    projectId: "expensetracker-10c5e",
    storageBucket: "expensetracker-10c5e.firebasestorage.app",
    messagingSenderId: "322790792494",
    appId: "1:322790792494:web:b19b15d7620078dea0eebf",
    measurementId: "G-S2G4HR3Q63",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
