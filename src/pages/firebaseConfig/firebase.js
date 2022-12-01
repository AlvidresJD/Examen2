import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC0yJxGwKGsEE3Zbp-vJb9kCER1FJV7Bgs",
  authDomain: "examen2-f659a.firebaseapp.com",
  projectId: "examen2-f659a",
  storageBucket: "examen2-f659a.appspot.com",
  messagingSenderId: "607347701909",
  appId: "1:607347701909:web:c91a81040570cba66f439c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)