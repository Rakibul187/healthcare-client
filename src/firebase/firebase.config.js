// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkYwheHLiw5qf4v-U1xYIm7eO7yteVf8k",
    authDomain: "healthcare-be3a8.firebaseapp.com",
    projectId: "healthcare-be3a8",
    storageBucket: "healthcare-be3a8.appspot.com",
    messagingSenderId: "374933577807",
    appId: "1:374933577807:web:91dc6126a4dc728a7d0a3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;