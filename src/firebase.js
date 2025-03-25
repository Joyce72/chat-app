import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVi9dvISkrEn6hWeE3INIwXkQPJdarTQs",
  authDomain: "react-chat-8fd59.firebaseapp.com",
  databaseURL: "https://react-chat-8fd59-default-rtdb.firebaseio.com",
  projectId: "react-chat-8fd59",
  storageBucket: "react-chat-8fd59.appspot.com",
  messagingSenderId: "707984560067",
  appId: "1:707984560067:web:7a51e13fbc86c3738a3776",
  measurementId: "G-0ERHQ4FM87"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();