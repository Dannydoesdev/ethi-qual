import firebase from "firebase/app";
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { applicationDefault } from 'firebase-admin/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getDatabase } from "@firebase/database";
import { getStorage } from "firebase/storage";

// import { initializeApp, applicationDefault } from 'firebase-admin/app';
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import "firebase/messaging";
import "firebase/performance";
import "firebase/remote-config";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const realDB = getDatabase(app);
const storage = getStorage(app);
function initFirebase() {
  if (getApps().length < 1) {
    // initializeApp(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
    // if (typeof window !== "undefined") {
    // if ('measurementId' in firebaseConfig) {
    // getAnalytics()
    // firebase.performance()
    // }
    // }
    // Initialize other firebase products here
  }
  console.log('firebase initialized');
}

export { initFirebase, db, realDB };