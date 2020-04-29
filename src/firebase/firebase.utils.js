import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCtUiJIa2_VEug9xK-coQnyK6lZpI1al8I',
  authDomain: 'e-commerce-crown-db.firebaseapp.com',
  databaseURL: 'https://e-commerce-crown-db.firebaseio.com',
  projectId: 'e-commerce-crown-db',
  storageBucket: 'e-commerce-crown-db.appspot.com',
  messagingSenderId: '902828519351',
  appId: '1:902828519351:web:97858c7882658879280232',
  measurementId: 'G-MHMF2N5L19',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName, email, createdAt,
        ...additionalData
      })
    } catch ( error ) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
