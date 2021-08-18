import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'
const config = {
    apiKey: "AIzaSyBtU6wpqci5eQBG2epXizrXgVY-Ep1RtZU",
    authDomain: "myclothing-e8653.firebaseapp.com",
    projectId: "myclothing-e8653",
    storageBucket: "myclothing-e8653.appspot.com",
    messagingSenderId: "771805416191",
    appId: "1:771805416191:web:ac54e17f0462836c84daca",
    measurementId: "G-BESRPHDCE4"
  };
  firebase.initializeApp(config);
  export const auth =firebase.auth();
  export const firestore =firebase.firestore();
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle=()=>(auth.signInWithPopup(provider));
  export default firebase;