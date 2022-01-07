import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore/lite'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCVfCspdn1dFU5w3eCEMhBpvuGp3AKXakU",
    authDomain: "fir-f8bd2.firebaseapp.com",
    projectId: "fir-f8bd2",
    storageBucket: "fir-f8bd2.appspot.com",
    messagingSenderId: "803531458863",
    appId: "1:803531458863:web:5dfe4eea19edadb51cf9da",
    measurementId: "G-XSXET5S2R9"
  };

const firebaseApp = initializeApp(firebaseConfig);//initializing firebase app

const db = getFirestore(firebaseApp);// firebase realtime data store
const auth= getAuth(firebaseApp); //firebase authentication

export { db, auth };