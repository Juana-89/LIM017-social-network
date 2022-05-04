//Desacoplando funciones 
import { getAuth, getFirestore, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword, setDoc, doc, signOut } from '../.firebase/index.js';
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

export const createNewUserFunction = (email, password) => {
    // const user = userCredential.user;
    // createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    // setDoc(doc(db, 'users/' + user.uid),{
    //     username: username,
    //     realname: realname,
    //     email: email,
    //     password: password,
    //   });
    //   return userCredential;
    // })
    return createUserWithEmailAndPassword(auth, email, password);
};

export const sendEmailForgotPassword = (email) =>{
     return sendPasswordResetEmail(auth, email)
    };

export const logout = () =>{
    return signOut(auth)  
    };


    // export const createNewUserFunction = (username, realname, email, password) => {
    //     return createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //     const user = userCredential.user;
    //     setDoc(doc(db, 'users/' + user.uid),{
    //         username: username,
    //         realname: realname,
    //         email: email,
    //         password: password,
    //       });
    //       alert('Registrado')
    //     })
    //     .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     alert(errorCode + errorMessage);
    //     });
    // };