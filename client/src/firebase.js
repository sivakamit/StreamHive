import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWU9X5RU6x8n9aZ6b1OzzlWRPM1S5SuSE",
  authDomain: "videoapp-a73a1.firebaseapp.com",
  projectId: "videoapp-a73a1",
  storageBucket: "videoapp-a73a1.appspot.com",
  messagingSenderId: "237379970026",
  appId: "1:237379970026:web:51ad33203e4a7b95870893",
  measurementId: "G-ZVHSPT0LBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();

export default app;