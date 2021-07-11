import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAsatDhggpqT09n5wxWhqn7X_i9MI0mMwY",
  authDomain: "vuegram-80e09.firebaseapp.com",
  projectId: "vuegram-80e09",
  storageBucket: "vuegram-80e09.appspot.com",
  messagingSenderId: "689439512622",
  appId: "1:689439512622:web:b1faa3a5588b55a9f7e7bf"
};

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectStorage, timestamp }
