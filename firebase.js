// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa01wR8185W25jcWnctMwJlGf6sGNi44U",
  authDomain: "twitter-clone-bd221.firebaseapp.com",
  projectId: "twitter-clone-bd221",
  storageBucket: "twitter-clone-bd221.appspot.com",
  messagingSenderId: "674375007193",
  appId: "1:674375007193:web:2f688ad737dfa7f93f77c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)