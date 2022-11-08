// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAMSgJN5gfwsGmB8GIYCAsW4Eae2OhdhUI",
  authDomain: "sigmalink-4377c.firebaseapp.com",
  projectId: "sigmalink-4377c",
  storageBucket: "sigmalink-4377c.appspot.com",
  messagingSenderId: "342337195295",
  appId: "1:342337195295:web:57224d970c4ebb0ac8f42a",
  measurementId: "G-PD25PH78MC"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)


export {db, auth}