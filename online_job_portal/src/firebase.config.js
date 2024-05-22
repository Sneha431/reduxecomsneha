// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVmjf5Ch16f9L0TRGxQr4klhkWwOXYkgw",
  authDomain: "job-board-react-11bfb.firebaseapp.com",
  projectId: "job-board-react-11bfb",
  storageBucket: "job-board-react-11bfb.appspot.com",
  messagingSenderId: "71325373393",
  appId: "1:71325373393:web:1ebf1926b15e7e7da906f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
