import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCRjcQo3n8DlGpg9FHYbgxxg-LXhULcHes",
  authDomain: "moviestreamer-c5798.firebaseapp.com",
  projectId: "moviestreamer-c5798",
  storageBucket: "moviestreamer-c5798.appspot.com",
  messagingSenderId: "888260954580",
  appId: "1:888260954580:web:d2a9c856fb30f61ea92e41",
  measurementId: "G-SQVL1Z1CPM"
};




const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);