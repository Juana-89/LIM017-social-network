// //Desacoplar funciones del firebase
// import { getAuth, getFirestore, setDoc, doc, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from '../.firebase/index.js';
// import { app } from '../.firebase/config.js';

// const auth = getAuth(app);
// const db = getFirestore(app);

// export const signInGmail = () => {
//     // return signInWithPopup(auth, new GoogleAuthProvider());
//     const provider = new GoogleAuthProvider()
//     return signInWithPopup(auth, provider)
//     };

// export const signInFacebook = () => {
//     const provider = new FacebookAuthProvider();
//     return signInWithPopup(auth, provider)
//     };

// export const signInUser = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password)
//     };

// export const createNewUser = () => {
//     return createUserWithEmailAndPassword(auth, email, password)
//     };

// export const sendEmailForgotPassword = (email) =>{
//      return sendPasswordResetEmail(auth, email)
//     };

// export const logout = () =>{
//     return signOut(auth)  
//     };