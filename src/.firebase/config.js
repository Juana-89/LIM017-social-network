import { initializeApp } from '../.firebase/index.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js';

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBVeQvlxGrnQPSMtHDBANiwk-MTOvyNcb8',
  authDomain: 'tusuy-peru.firebaseapp.com',
  projectId: 'tusuy-peru',
  storageBucket: 'tusuy-peru.appspot.com',
  messagingSenderId: '1099409677796',
  appId: '1:1099409677796:web:19eea0a3ffa9bde940fbf1',
  measurementId: 'G-NM5V1TC45N',
};

// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

