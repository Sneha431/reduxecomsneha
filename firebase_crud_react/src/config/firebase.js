// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFUcPS77f-ENIZtDChkzoSaDQs5OfydXs",
  authDomain: "vite-contact-app-bf6fb.firebaseapp.com",
  projectId: "vite-contact-app-bf6fb",
  storageBucket: "vite-contact-app-bf6fb.appspot.com",
  messagingSenderId: "744453044831",
  appId: "1:744453044831:web:44c3ffeaabf85245ceb9ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);