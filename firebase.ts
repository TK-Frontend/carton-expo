import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBXULRfc3UdqX6LH_VF1TtbMeE7-GJmvtw',
  authDomain: 'carton-69.firebaseapp.com',
  projectId: 'carton-69',
  storageBucket: 'carton-69.appspot.com',
  messagingSenderId: '597232531536',
  appId: '1:597232531536:web:d795505d40a062611c7955',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
