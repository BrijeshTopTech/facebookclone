import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuAG-ftf-n3RTbQ8mBLF_nbpx74pDW1Mk",
  authDomain: "fb-clone-ac12b.firebaseapp.com",
  projectId: "fb-clone-ac12b",
  storageBucket: "fb-clone-ac12b.firebasestorage.app",
  messagingSenderId: "417941281029",
  appId: "1:417941281029:web:37356ab3eb555ef0877f6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

const storageRef = ref(storage);

export { db, storage };
