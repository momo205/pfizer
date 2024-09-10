// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBx6xL5Ol0aIp14PUSDjFc_jEgkV6kfFY",
  authDomain: "pfizer-92956.firebaseapp.com",
  projectId: "pfizer-92956",
  storageBucket: "pfizer-92956.appspot.com",
  messagingSenderId: "755763021443",
  appId: "1:755763021443:web:4e1193698a955d0098fdb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);