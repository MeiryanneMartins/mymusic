import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyCA-Y4ppLKJDvd1qOVA4CtEPnaG-cgvKkA",
  authDomain: "mymusic-e213f.firebaseapp.com",
  projectId: "mymusic-e213f",
  storageBucket: "mymusic-e213f.appspot.com",
  messagingSenderId: "543038201765",
  appId: "1:543038201765:web:1212572bcb36275b01124c",
  measurementId: "G-VHZFFH7GDV"
};

export const initFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(initFirebase);