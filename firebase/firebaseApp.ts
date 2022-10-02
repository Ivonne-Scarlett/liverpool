// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfAfnlmSwya8qDE1zETsSC4qDHLc5yYis",
  authDomain: "auth-1d3d8.firebaseapp.com",
  projectId: "auth-1d3d8",
  storageBucket: "auth-1d3d8.appspot.com",
  messagingSenderId: "92740987720",
  appId: "1:92740987720:web:2c1152a1affd6535ace17d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app
}