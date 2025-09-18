import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  "projectId": "nextn",
  "appId": "1:495512062480:web:d02a50c441b4b1a29ad895",
  "storageBucket": "nextn.appspot.com",
  "apiKey": "AIzaSyAVWzDHxakB1YkeaBVAhXOeje6JNo8Ob6s",
  "authDomain": "nextn.firebaseapp.com",
  "measurementId": "G-599186EZG3",
  "messagingSenderId": "495512062480"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
