
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfIiE-s7bMtpXy9tPSiSM9MhP8o39FTCU",
  authDomain: "auth-test-93a88.firebaseapp.com",
  projectId: "auth-test-93a88",
  storageBucket: "auth-test-93a88.appspot.com",
  messagingSenderId: "626841768902",
  appId: "1:626841768902:web:f76803ff952c54695458c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};