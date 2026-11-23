
import { initializeApp, getApp, getApps } from 'firebase/app';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from 'firebase/auth';

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD7cx7sL4AZwYzG72P3jO9VHxzcVgitegM",
  authDomain: "bryanapi.firebaseapp.com",
  projectId: "bryanapi",
  storageBucket: "bryanapi.firebasestorage.app",
  messagingSenderId: "855578471099",
  appId: "1:855578471099:web:5444eb84fd80fad2a3979e",
  measurementId: "G-C9H039MLRY"
};

// Inicialização do Firebase
const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

// Autenticação
let auth;

try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (error) {
  auth = getAuth(app);
}

export { app, auth };
