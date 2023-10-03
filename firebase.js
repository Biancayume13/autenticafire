// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5BPLMNE8KFTUfS4Xf_qWvpEE3Ail_Cys",
  authDomain: "autentica-fireblue.firebaseapp.com",
  projectId: "autentica-fireblue",
  storageBucket: "autentica-fireblue.appspot.com",
  messagingSenderId: "788461928098",
  appId: "1:788461928098:web:4f02f18ab9045b4707a1fb"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
let app; //variavel global
if ( firebaseConfig.apps.length == 0 ) {
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app()
}

const autentica = firebase.autentica()