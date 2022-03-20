// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC7dJtpQjRoTyuxSDTyxs2y6vzLg7wjUy4",
  authDomain: "lab-firebase-1a4c4.firebaseapp.com",
  projectId: "lab-firebase-1a4c4",
  storageBucket: "lab-firebase-1a4c4.appspot.com",
  messagingSenderId: "1092639063731",
  appId: "1:1092639063731:web:240a3cfa3ff6b617ecfac6",
  measurementId: "G-F4NKD0YN85"
});
const db = getFirestore(firebaseApp);  
const auth = getAuth(firebaseApp); 
export { db, auth};