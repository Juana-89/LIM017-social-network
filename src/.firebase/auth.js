import { getAuth, GoogleAuthProvider, FacebookAuthProvider,  signInWithPopup, } from '../.firebase/index.js';
import { app } from '../.firebase/config.js';

const auth = getAuth();

export const signInGmail = () => {
    return signInWithPopup(auth, new GoogleAuthProvider());
  };

  export const signInFacebook = () => {
    return signInWithPopup(auth, new FacebookAuthProvider());
  };