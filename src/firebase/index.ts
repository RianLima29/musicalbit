import {initializeApp} from 'firebase/app'
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB3WNRMlkvrQv0Wez-MLNlXVQx_p5HGBLE",
  authDomain: "musicalbit-d9b36.firebaseapp.com",
  projectId: "musicalbit-d9b36",
  storageBucket: "musicalbit-d9b36.appspot.com",
  messagingSenderId: "332305143332",
  appId: "1:332305143332:web:e5dbeb7c67fdad12a12ab1",
  measurementId: "G-L7EWPTPWD0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const auth = getAuth(app)
