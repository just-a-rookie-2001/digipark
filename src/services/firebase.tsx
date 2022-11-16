import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCCv2aFS7jy8f-XG-WOR1HcOWuIVNb1Wgc',
  authDomain: 'digipark-9a134.firebaseapp.com',
  databaseURL:
    'https://digipark-9a134-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'digipark-9a134',
  storageBucket: 'digipark-9a134.appspot.com',
  messagingSenderId: '874110214829',
  appId: '1:874110214829:web:a969b128e39629e3f59c24',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {db, auth, firestore};
