import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "cosmichat-enigma.firebaseapp.com",
  projectId: "cosmichat-enigma",
  storageBucket: "cosmichat-enigma.firebasestorage.app",
  messagingSenderId: "168138103291",
  appId: "1:168138103291:web:b4c2fc678056888376135e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
