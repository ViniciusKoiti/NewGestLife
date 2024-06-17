import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getAuth, initializeAuth, onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}