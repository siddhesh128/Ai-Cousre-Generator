// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-gen-24a83.firebaseapp.com",
  projectId: "ai-course-gen-24a83",
  storageBucket: "ai-course-gen-24a83.appspot.com",
  messagingSenderId: "303844885580",
  appId: "1:303844885580:web:bc3002531c428e298c60e9",
  measurementId: "G-SKK2FNYW87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
