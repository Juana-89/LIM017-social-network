import { getAuth, GoogleAuthProvider, FacebookAuthProvider,  signInWithPopup, signInWithEmailAndPassword } from '../.firebase/index.js';
import { app } from '../.firebase/config.js';

const auth = getAuth(app);

export const signInGmail = () => {
    return signInWithPopup(auth, new GoogleAuthProvider());
  };

export const signInFacebook = () => {
    return signInWithPopup(auth, new FacebookAuthProvider());
  };

export const signInUser = (email, password) => {
       signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
           alert("Entraste!");
           console.log("Entraste!", userCredential.user)
          // Signed in 
    
          })
          .catch((error) => {
            alert(error.message);
            // const errorCode = error.code;
            // const errorMessage = error.message;
          });
        }