import firebase from '../firebase_connection';

export const setUserInLocalStore = (userData: any) => {
  localStorage.setItem('ALTATECH_USER', JSON.stringify(userData));
};

export const createUserInDataBase = async (userData: any) => {
  try {
    await firebase.firestore().collection('users').doc(userData.uid).set(userData);
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getUserInDataBase = async (userId: string) => {
  try {
    return await firebase.firestore().collection('users').doc(userId).get();
  } catch (error: any) {
    console.log('erro');
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const signIn = await firebase.auth().signInWithEmailAndPassword(email, password);
    const userId: any = await signIn.user?.uid;
    const userData = await getUserInDataBase(userId);
    setUserInLocalStore(userData?.data());
    return userData?.data();
  } catch (error: any) {
    console.log(error.message);
  }
};

export const registerUser = async (email: string, password: string, name: string, adm: boolean) => {
  try {
    const createUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const userUid = createUser.user?.uid;
    await createUserInDataBase({
      name, email, adm, uid: userUid,
    });
    setUserInLocalStore({ name, email, adm });
    return { name, email, adm };
  } catch (error: any) {
    console.log(error.message);
  }
};
