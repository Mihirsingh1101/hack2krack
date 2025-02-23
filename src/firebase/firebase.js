import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfkC-117PjMZx3Moti6A8sLYJKq5TCNXY",
  authDomain: "first-projectm.firebaseapp.com",
  projectId: "first-projectm",
  storageBucket: "first-projectm.appspot.com",
  messagingSenderId: "1016889355535",
  appId: "1:1016889355535:web:d02197b8d77029a94ce27a",
  measurementId: "G-FCKT1E4MW2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const gProvider = new  GoogleAuthProvider();
export const db =  getFirestore(app);
export const storage = getStorage(app);
export const imageDb = getStorage(app)