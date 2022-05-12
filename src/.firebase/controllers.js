//Desacoplando funciones 
import { getAuth, getFirestore, GoogleAuthProvider, FacebookAuthProvider, 
         signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail, 
         createUserWithEmailAndPassword, getDocs, onSnapshot, addDoc, collection, setDoc, doc, onAuthStateChanged, signOut, getStorage, ref } from '../.firebase/index.js';
import { app } from '../.firebase/config.js';

const auth = getAuth(app);
const db = getFirestore(app);

// Iniciar sesión con Gmail
export const loginGmailFunction = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
};

// Iniciar sesión con Facebook
export const loginFacebookFunction = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider)
};

// Iniciar sesión 
export const signInUserFunction = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
};

// Crear cuenta
export const createNewUserFunction = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Olvidó contraseña
export const sendEmailForgotPasswordFunction = (email) => {
    auth.languageCode = 'es';
    return sendPasswordResetEmail(auth, email);
};

export const onAuthStateChangedFunction = (state) => {
    const user = auth.currentUser;
    return onAuthStateChanged(auth, user)
};

// Ver datos de la bd
export const getPost = () => {
   return getDocs(collection(db, 'posts')) 
};

// Ver datos en tiempo real
export const onGetSnapshot = (callback) => {
    return onSnapshot (collection(db, 'posts'), (callback) )
};

//Guardar post del usuario
export const savePostFunction = (post) => {
    setTimeout(() => {return addDoc(collection(db, '/posts'), { post })}, 1000);
};

//Salir de la sesión
export const logoutFunction = () => {
    return signOut(auth)  
};