
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYk8Jgnj9LedOllitwmRhv7ytaAHUDocg",
  authDomain: "comision47255.firebaseapp.com",
  projectId: "comision47255",
  storageBucket: "comision47255.appspot.com",
  messagingSenderId: "623403857526",
  appId: "1:623403857526:web:4b68df0275b97740fd5157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initlizeFirebase = () => app