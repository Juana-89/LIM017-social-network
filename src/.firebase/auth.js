import { getAuth, getFirestore, setDoc, doc, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../.firebase/index.js';
import { app } from '../.firebase/config.js';

const auth = getAuth(app);
const db = getFirestore(app);

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
      })
      .catch((error) => {
            alert(error.message);
            const errorCode = error.code;
            const errorMessage = error.message;
            return false;
          });
      }

export const createNewUser = () => {
      const username = document.querySelector('#inp_name_user').value;
      const realname = document.querySelector('#inp_realname').value;
      const email = document.querySelector('#inp_email').value;
      const password = document.querySelector('#inp_password1').value;
    
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      const user = userCredential.user;
      setDoc(doc(db, 'users/' + user.uid),{
        username: username,
        realname: realname,
        email: email,
        password: password
      });
      alert("registrado!",  userCredential.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        return false;
      });
}