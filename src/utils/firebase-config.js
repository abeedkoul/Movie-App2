import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAbpMcZ5L9Xndyua0LYYOJece0_QSbWDqM",
  authDomain: "react-symphony-app.firebaseapp.com",
  projectId: "react-symphony-app",
  storageBucket: "react-symphony-app.appspot.com",
  messagingSenderId: "641874735643",
  appId: "1:641874735643:web:a5fcbc90edbee8d9d93ebe",
  measurementId: "G-Y13S9Z0B7K"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);