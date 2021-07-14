import React, { useContext } from 'react';
import firebase from 'firebase/app'
import 'firebase/firestore'
import { CartContext } from '../context/CartContext'

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

export const BuyCart = ( name, email, phone, list ) => {
  
  const dataBase = getFirestore();
  const orders = dataBase.collection('orders');

  const newOrder = {
    fecha: firebase.firestore.Timestamp.fromDate(new Date()),
    nombre: name,
    mail: email,
    telefono: phone,
    productos: list,
  };
  orders.add(newOrder).then(({id}) =>{
    console.log(id);
  }).catch(err =>{
    console.log(err);
  }).finally(() =>{
    console.log("end");
  });
}