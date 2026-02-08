// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1JFkvg5uV1ziDp0KCtNPSYLMnsm-XXOs",
  authDomain: "practice-d48da.firebaseapp.com",
  projectId: "practice-d48da",
  storageBucket: "practice-d48da.firebasestorage.app",
  messagingSenderId: "387537949708",
  appId: "1:387537949708:web:165c7861e3db037af28a29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
