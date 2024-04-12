// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpc3VrGjU_C7L6bFoS-9vuedgSoYxAoAQ",
  authDomain: "elite-estates-8b0f7.firebaseapp.com",
  projectId: "elite-estates-8b0f7",
  storageBucket: "elite-estates-8b0f7.appspot.com",
  messagingSenderId: "1045133170308",
  appId: "1:1045133170308:web:559a99b3931f72c12154d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth