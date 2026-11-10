
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCF1rJ_9euzVddVdtXYGizm-19PlGdDGnE",
  authDomain: "reactlinks-244b2.firebaseapp.com",
  projectId: "reactlinks-244b2",
  storageBucket: "reactlinks-244b2.firebasestorage.app",
  messagingSenderId: "1027287912643",
  appId: "1:1027287912643:web:433d83e785a31277b0d276"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }