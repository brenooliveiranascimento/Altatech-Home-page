import firebase from '../firebase_connection';

export const siginUser = async (email: string, password: string) => {
  const userData = await firebase.auth()
    .signInWithEmailAndPassword(email, password);
  return userData.user?.uid;
};
