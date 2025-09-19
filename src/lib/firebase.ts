import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  "projectId": "studio-9356365406-11a53",
  "appId": "1:495512062480:web:42968018a0ca982b9ad895",
  "apiKey": "AIzaSyAVWzDHxakB1YkeaBVAhXOeje6JNo8Ob6s",
  "authDomain": "studio-9356365406-11a53.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "495512062480"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
