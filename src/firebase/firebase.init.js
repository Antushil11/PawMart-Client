// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZyZft24dqKzIBKeDI1OslDnnw1U-nOIw",
  authDomain: "paw-mart-32db7.firebaseapp.com",
  projectId: "paw-mart-32db7",
  storageBucket: "paw-mart-32db7.firebasestorage.app",
  messagingSenderId: "417852840567",
  appId: "1:417852840567:web:8fd37b10f16f17711c8472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
