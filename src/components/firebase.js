import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ( {
    apiKey: "AIzaSyAFYKOGCcgpRBj5SFOKnzf0Ylp--lZc1_s",
    authDomain: "unichat-11cdf.firebaseapp.com",
    projectId: "unichat-11cdf",
    storageBucket: "unichat-11cdf.appspot.com",
    messagingSenderId: "1041283473434",
    appId: "1:1041283473434:web:890006c97ca395a81ff1a3"
  }).auth();