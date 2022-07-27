import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYrZ_LGmTTgWIGfCqNe16S0dR6rNrOawo",
    authDomain: "cart-13c49.firebaseapp.com",
    projectId: "cart-13c49",
    storageBucket: "cart-13c49.appspot.com",
    messagingSenderId: "345484731292",
    appId: "1:345484731292:web:5473d80c49d73148c95e59"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);