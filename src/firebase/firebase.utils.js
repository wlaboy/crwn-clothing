import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCXJJm5myvJS3FB0c07v3lzYE8AQMlLP80",
  authDomain: "crwn-db-fffff.firebaseapp.com",
  projectId: "crwn-db-fffff",
  storageBucket: "crwn-db-fffff.appspot.com",
  messagingSenderId: "411918210627",
  appId: "1:411918210627:web:30d476477a2a4c0fae66f6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
