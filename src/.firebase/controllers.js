//Desacoplando funciones 
import { getAuth, getFirestore, GoogleAuthProvider, FacebookAuthProvider, 
         signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail, 
         createUserWithEmailAndPassword, getDocs, addDoc, collection, setDoc, doc, onAuthStateChanged, signOut, getStorage, ref } from '../.firebase/index.js';
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
    return createUserWithEmailAndPassword(auth, email, password);
};

export const sendEmailForgotPasswordFunction = (email) => {
    auth.languageCode = 'es';
    return sendPasswordResetEmail(auth, email);
};

export const onAuthStateChangedFunction = (state) => {
    const user = auth.currentUser;
    return onAuthStateChanged(auth, user)
};

export const getPostFunction = () => {
   return getDocs(collection(db, 'posts')) 
};

export const savePostFunction = (post) => {
    return addDoc(collection(db, '/posts'), { post });
};

export const logoutFunction = () => {
    return signOut(auth)  
};