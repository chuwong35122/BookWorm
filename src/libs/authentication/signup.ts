import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import * as Yup from 'yup';
import {doc, setDoc} from 'firebase/firestore';
import {db} from '../../../App';
import {UserInfo} from './../../interfaces/user.interface';

export const emailSignUpFormValidation = Yup.object().shape({
  email: Yup.string().email('Email is invalid.').required('Email is required.'),
  username: Yup.string()
    .min(6, 'Enter a longer username.')
    .max(16, 'Enter a shorter username.')
    .required('Username is required'),
  password: Yup.string()
    .min(6, 'Enter a longer password.')
    .required('Password is required.'),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref('password'), null],
      'Confirm password must match to password.',
    )
    .required('Password confirmation is required.'),
});

export async function signUpWithEmail(email: string, password: string) {
  const auth = getAuth();
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );
  return credential.user;
}

export async function signInWithEmail(email: string, password: string) {
  const auth = getAuth();
  const credential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  ).catch(() => {
    throw new Error('Cannot sign-in.');
  });
  return credential.user;
}

export async function storeInitialUserInfo(username: string, uid: string) {
  const docData: UserInfo = {
    username: username,
    recent: [],
    read: [],
  };
  await setDoc(doc(db, 'User', uid), {
    docData,
  });
}
