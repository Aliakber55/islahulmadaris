// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADwXWWq-TUPpCtGF7sGYv8m7yqhUQScf0",
  authDomain: "islah-ui-madaris-app.firebaseapp.com",
  projectId: "islah-ui-madaris-app",
  storageBucket: "islah-ui-madaris-app.firebasestorage.app",
  messagingSenderId: "1020805108026",
  appId: "1:1020805108026:web:a2bc1902dd22f399114003",
  measurementId: "G-XYK3G9X0KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
