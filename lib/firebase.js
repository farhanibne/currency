import { initializeApp } from "firebase/app";

import firebase from 'firebase';
import "firebase/database" ; 

const firebaseConfig = {
  apiKey: "AIzaSyDPKZxaJmYAG5c8MvIs4kIEpliHEwh4d-g",
  authDomain: "currency-dz.firebaseapp.com",
  projectId: "currency-dz",
  storageBucket: "currency-dz.appspot.com",
  messagingSenderId: "350688242896",
  appId: "1:350688242896:web:322fa9994e2e685ddf02d5",
  measurementId: "G-L1ZE5NMQB0"
};

// Initialize Firebase
if(!firebase.apps.length){firebase.initializeApp(firebaseConfig);}
 
export {firebase}