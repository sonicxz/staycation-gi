import { doc, getDoc, setDoc } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcy8lrQVECnb_IRFDxr_KAey6HKW1_W-8",
  authDomain: "staycation-17586.firebaseapp.com",
  projectId: "staycation-17586",
  storageBucket: "staycation-17586.appspot.com",
  messagingSenderId: "566103477603",
  appId: "1:566103477603:web:407a4cb2f91894a228d756",
  measurementId: "G-LPBZE6M5QL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export { auth, provider, db };
