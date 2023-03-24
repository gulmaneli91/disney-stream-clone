// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";




const firebaseConfig = {

  apiKey: "AIzaSyCmw_aZhYuNRd9xzvS54EysM77L8jonX8o",

  authDomain: "disneyplus-clone-14f0e.firebaseapp.com",

  projectId: "disneyplus-clone-14f0e",

  storageBucket: "disneyplus-clone-14f0e.appspot.com",

  messagingSenderId: "801053039841",

  appId: "1:801053039841:web:2d41b85e320b8d9b18eba0",

  measurementId: "G-6S5NTTB99E"

};



const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = getAuth();

const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export  { auth,provider, storage };
export default db;
