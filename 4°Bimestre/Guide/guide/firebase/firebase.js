import { initializeApp} from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgOcpHjkV7LgYwaH3n9pAk6uXBzlKdm7s",
  authDomain: "guide-53eec.firebaseapp.com",
  projectId: "guide-53eec",
  storageBucket: "guide-53eec.firebasestorage.app",
  messagingSenderId: "496500572346",
  appId: "1:496500572346:web:4a3950f54c1b982af14283"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);