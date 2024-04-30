import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAhG9Cx2LGh5kCCWgg_q8DnXRelzqQ3EU0",
  authDomain: "authenticationpage-4970c.firebaseapp.com",
  projectId: "authenticationpage-4970c",
  storageBucket: "authenticationpage-4970c.appspot.com",
  messagingSenderId: "302391401120",
  appId: "1:302391401120:web:574790323f2236d7ac07c5",
  measurementId: "G-H2M3X23KL5"
};

const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const provider=new GoogleAuthProvider();
