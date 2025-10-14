import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // ✅ Authentication modülünü import et
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


// Firebase App başlatılıyor (Duplicate App hatasını önler)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Firestore başlat
const db = getFirestore(app);

//  Auth başlat
const auth = getAuth(app);

export { app, db, auth };


