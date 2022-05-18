import { initializeApp } from '../.firebase/index.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBVeQvlxGrnQPSMtHDBANiwk-MTOvyNcb8',
  authDomain: 'tusuy-peru.firebaseapp.com',
  projectId: 'tusuy-peru',
  storageBucket: 'tusuy-peru.appspot.com',
  messagingSenderId: '1099409677796',
  appId: '1:1099409677796:web:19eea0a3ffa9bde940fbf1',
  measurementId: 'G-NM5V1TC45N',
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);

