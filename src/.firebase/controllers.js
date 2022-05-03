//Desacoplando funciones 
import { getAuth, getFirestore, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword, signOut } from '../.firebase/index.js';
import { app } from '../.firebase/config.js';

const auth = getAuth(app);
const db = getFirestore(app);

export const loginGmailFunction = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
    };

export const loginFacebookFunction = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider)
    };

export const signInUserFunction = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    };

// export const createNewUser = () => {
//     return createUserWithEmailAndPassword(auth, email, password)
//     };

export const sendEmailForgotPassword = (email) =>{
     return sendPasswordResetEmail(auth, email)
    };

export const logout = () =>{
    return signOut(auth)  
    };