import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCamFaiSBSnYb3ob9Yb-Qlcs-vIS06RnE8",
    authDomain: "crown-db-e8a69.firebaseapp.com",
    databaseURL: "https://crown-db-e8a69.firebaseio.com",
    projectId: "crown-db-e8a69",
    storageBucket: "crown-db-e8a69.appspot.com",
    messagingSenderId: "659371028679",
    appId: "1:659371028679:web:d33ca5c9dba0ad38c60ee2",
    measurementId: "G-QDCG8C1E3H"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
