// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmNPkpWWez9YBxWZdOODVwlJ7J9JFuuuE",
  authDomain: "laundryapp-2a325.firebaseapp.com",
  projectId: "laundryapp-2a325",
  storageBucket: "laundryapp-2a325.appspot.com",
  messagingSenderId: "268782590103",
  appId: "1:268782590103:web:e8d068e49adda99258b1d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};