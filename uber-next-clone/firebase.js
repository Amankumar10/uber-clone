// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDHNe8B26iReyWsmHQr37HgTCJCLeR9Ec",
  authDomain: "uber-next-clone-live-b404b.firebaseapp.com",
  projectId: "uber-next-clone-live-b404b",
  storageBucket: "uber-next-clone-live-b404b.appspot.com",
  messagingSenderId: "790011288484",
  appId: "1:790011288484:web:e1f80de2c1ab543658bf31",
  measurementId: "G-7PRY7T2567"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app,provider,auth }