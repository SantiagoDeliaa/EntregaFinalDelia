import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDF2XhBJk6gG10_a7TpPIVjb5F1lgDwLpQ",
    authDomain: "ecommerce-coder-58950.firebaseapp.com",
    projectId: "ecommerce-coder-58950",
    storageBucket: "ecommerce-coder-58950.appspot.com",
    messagingSenderId: "401473671650",
    appId: "1:401473671650:web:fca2cefe650aee25cda9bb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);