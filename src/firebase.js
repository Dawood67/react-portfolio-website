
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCkMADtITvOGm_S_vyDQh88SlXHe1CUe-c",
    authDomain: "react-portfolio-website-7d58d.firebaseapp.com",
    projectId: "react-portfolio-website-7d58d",
    storageBucket: "react-portfolio-website-7d58d.appspot.com",
    messagingSenderId: "788299655934",
    appId: "1:788299655934:web:173fc38c9f9d8770a193af",
    measurementId: "G-KDD5MQKK0T"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);