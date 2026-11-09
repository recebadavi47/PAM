import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMNQWIec0SZCbdapF_UcOoNn3CAaepo7U",
  authDomain: "login-d1cde.firebaseapp.com",
  projectId: "login-d1cde",
  storageBucket: "login-d1cde.firebasestorage.app",
  messagingSenderId: "262961705610",
  appId: "1:262961705610:web:e5faa6fd6c050970a7b373"
};

js
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);