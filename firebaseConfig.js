// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9mOCqmYhKVgGZJHoz7NX9HqYX4x10ErM",
  authDomain: "users-f1382.firebaseapp.com",
  projectId: "users-f1382",
  storageBucket: "users-f1382.appspot.com",
  messagingSenderId: "502671963638",
  appId: "1:502671963638:web:d762f3d1975070444243d7"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);