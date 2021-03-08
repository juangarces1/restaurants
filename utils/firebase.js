import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCqIuh9jrWgpe0omWPDLXQ8WKPyn94NlLg",
    authDomain: "restaurants-65158.firebaseapp.com",
    projectId: "restaurants-65158",
    storageBucket: "restaurants-65158.appspot.com",
    messagingSenderId: "636805108401",
    appId: "1:636805108401:web:c476177979fdaf8ad50890"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)