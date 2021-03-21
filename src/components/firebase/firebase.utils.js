import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBEIsvaRCzP1G2dcSbLa5Uht2NBnSeEYrs",
    authDomain: "crwn-db-c28bd.firebaseapp.com",
    projectId: "crwn-db-c28bd",
    storageBucket: "crwn-db-c28bd.appspot.com",
    messagingSenderId: "731252840681",
    appId: "1:731252840681:web:8d6968ed54eb355ba63878",
    measurementId: "G-MC1LGZKC2G"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;