import firebase from 'firebase/app'
import 'firebase/firestore'

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

/* const subir = () => {
  const dataBase = getFirestore();
  const products = dataBase.collection('productos');

  const newProducts = [];
  newProducts.forEach(p => products.add(p).then(({ id }) => {
    console.log(id);
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    console.log("end");
  }))
}
subir(); */