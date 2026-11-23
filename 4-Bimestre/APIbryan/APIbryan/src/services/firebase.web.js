import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// A mesma configuração pública usada no aplicativo nativo.
const firebaseConfig = {
  apiKey: "AIzaSyD7cx7sL4AZwYzG72P3jO9VHxzcVgitegM",
  authDomain: "bryanapi.firebaseapp.com",
  projectId: "bryanapi",
  storageBucket: "bryanapi.firebasestorage.app",
  messagingSenderId: "855578471099",
  appId: "1:855578471099:web:5444eb84fd80fad2a3979e",
  measurementId: "G-C9H039MLRY"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
