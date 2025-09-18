import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  "apiKey": "AIzaSyA2-m7Pz7G_7w_3q_3Q4-5r6t7u8i9o0p",
  "authDomain": "nivora-dev.firebaseapp.com",
  "projectId": "nivora-dev",
  "storageBucket": "nivora-dev.appspot.com",
  "messagingSenderId": "123456789012",
  "appId": "1:123456789012:web:a1b2c3d4e5f6a7b8c9d0e1",
  "measurementId": "G-ABCDEFGHIJ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
