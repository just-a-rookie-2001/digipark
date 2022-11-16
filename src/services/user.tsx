import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {auth, db} from './firebase';
import {ref, update} from 'firebase/database';

const registerWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    let data = {};
    const db_path = '/digipark/user/' + res.user.uid;
    data[db_path] = {email: email, key: ''};
    update(ref(db), data);
    return Promise.resolve();
  } catch (err) {
    console.error(err);
    return Promise.reject();
  }
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};

const logout = () => {
  signOut(auth);
};

export {registerWithEmailAndPassword, logInWithEmailAndPassword, logout};
