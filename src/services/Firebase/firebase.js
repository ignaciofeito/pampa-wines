import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const app = firebase.initializeApp(
  {
    apiKey: "AIzaSyCYGLFQR_Fkb8DLn8Cvac6nQD_HDuiA8eQ",
    authDomain: "pampa-wines.firebaseapp.com",
    projectId: "pampa-wines",
    storageBucket: "pampa-wines.appspot.com",
    messagingSenderId: "217089588876",
    appId: "1:217089588876:web:6688f14e54e4846b0b45a9"
  })

export const getFirebase = () => {
  return app;
}

export const getFirestore = () => {
  return firebase.firestore();
}