import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDK9sIzWahwLo5BMAi2dGyueaEaU90orsU",
  authDomain: "clone-38d35.firebaseapp.com",
  projectId: "clone-38d35",
  storageBucket: "clone-38d35.appspot.com",
  messagingSenderId: "714542755863",
  appId: "1:714542755863:web:eb324c6213decef6166c52"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }