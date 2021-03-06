//Mockeo todas las funciones de index.js
export const initializeApp = () => Promise.resolve({});
export const getAuth = () => Promise.resolve({});
export const getFirestore = () => Promise.resolve({});
export const setDoc = jest.fn((doc, value) => Promise.resolve({}));
export const doc = (db, header, id) => Promise.resolve({});
export class GoogleAuthProvider {};
export class FacebookAuthProvider {};
export const signInWithPopup = jest.fn((auth, provider) => Promise.resolve({}));
export const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({email, password}));
export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({email, password}));
export const sendPasswordResetEmail = jest.fn((auth,email) => Promise.resolve({email}));
export const signOut = jest.fn(() => Promise.resolve({}));
