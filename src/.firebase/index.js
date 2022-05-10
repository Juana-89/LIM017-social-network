export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
export { getFirestore, setDoc, getDoc, doc, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
export { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword, 
         createUserWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut  } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';