// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZuNzaCLOO_FDmiZ60CZOn8MeZMy1OrvU",
  authDomain: "react-course-88ece.firebaseapp.com",
  projectId: "react-course-88ece",
  storageBucket: "react-course-88ece.appspot.com",
  messagingSenderId: "995820887547",
  appId: "1:995820887547:web:40fa9153f0d05ad7017f5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();
