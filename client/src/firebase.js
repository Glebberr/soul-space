// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "soul-space-39f30.firebaseapp.com",
    projectId: "soul-space-39f30",
    storageBucket: "soul-space-39f30.appspot.com",
    messagingSenderId: "1007309455945",
    appId: "1:1007309455945:web:b27134160bf2787990b598"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);