// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbztMglle_CAUko8Yo4Xf4TwLcnNYZwbM",
  authDomain: "buzzline-23277.firebaseapp.com",
  projectId: "buzzline-23277",
  storageBucket: "buzzline-23277.appspot.com",
  messagingSenderId: "112019479810",
  appId: "1:112019479810:web:5a9a32ad3aa35d5513361b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const userRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
