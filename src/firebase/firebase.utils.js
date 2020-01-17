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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
