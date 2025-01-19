
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpdi_rOoa_g3OexiWCpHZg2vGH8EnsqmM",
  authDomain: "textractor-f1713.firebaseapp.com",
  projectId: "textractor-f1713",
  storageBucket: "textractor-f1713.firebasestorage.app",
  messagingSenderId: "226673628432",
  appId: "1:226673628432:web:b206d1012f124141420195"
};


const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)