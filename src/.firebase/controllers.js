//Desacoplando funciones 
import { getAuth, getFirestore, GoogleAuthProvider, FacebookAuthProvider, 
         signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail, 
         createUserWithEmailAndPassword, getDocs, onSnapshot, addDoc, collection, updateDoc, deleteDoc, getDoc, doc, 
         signOut, getStorage, ref } from '../.firebase/index.js';
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

// Ver datos de la bd
export const getPosts = () => {
   return getDocs(collection(db, 'posts')) 
};

// Ver dato de la bd para editar
export const getPost = (id) => {
    return getDoc(doc(db, 'posts', id)) 
 };

// Ver datos en tiempo real
export const onGetSnapshot = (callback) => {
    return onSnapshot (collection(db, 'posts'), (callback) )
};

//Guardar post del usuario
export const savePostFunction = (post) => {
    setTimeout(() => {return addDoc(collection(db, '/posts'), { post: post })}, 1000);
};

//Editar post del usuario
export const updatePost = (id, newPost) => {
    return updateDoc(doc(db, '/posts', id), newPost);
};

//Eliminar post del usuario
export const deletePost = (id) => {
   return deleteDoc(doc (db, '/posts', id));
};

//Salir de la sesión
export const logoutFunction = () => {
    return signOut(auth)  
};