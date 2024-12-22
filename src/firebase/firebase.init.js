// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY8rZa4LUrIS27c6OzW7kRvfHXwYwfj24",
  authDomain: "fundy-292a6.firebaseapp.com",
  projectId: "fundy-292a6",
  storageBucket: "fundy-292a6.firebasestorage.app",
  messagingSenderId: "905209452395",
  appId: "1:905209452395:web:bf106e467e10bbbd709e2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);