// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgpbRtLve_TRKdLGAjdJrLiepZgEUfm0U",
  authDomain: "islah-ul-madaris-4459032-c7136.firebaseapp.com",
  projectId: "islah-ul-madaris-4459032-c7136",
  storageBucket: "islah-ul-madaris-4459032-c7136.firebasestorage.app",
  messagingSenderId: "997266247092",
  appId: "1:997266247092:web:31170f942ce584eb6cf6e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);

// Connect to Firebase Emulators if in development mode
if (import.meta.env.DEV) {
  connectAuthEmulator(auth, "http://localhost:9099");
  console.log("Connecting to Firebase Auth Emulator");
}
