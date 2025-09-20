import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  "projectId": "nivora-449a7",
  "appId": "1:267444331390:web:118e82b7b5c138096f9a0c",
  "storageBucket": "nivora-449a7.appspot.com",
  "apiKey": "AIzaSyC_t-YjV6A0f6Z_4p9B-T9x8r7Y0K-l2jE",
  "authDomain": "nivora-449a7.firebaseapp.com",
  "messagingSenderId": "267444331390"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
