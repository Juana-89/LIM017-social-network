export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
export { getFirestore, setDoc, getDoc, addDoc, doc, collection, getDocs, onSnapshot,updateDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
export { getStorage, ref } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-storage.js';
export { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword, 
         createUserWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut  } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';