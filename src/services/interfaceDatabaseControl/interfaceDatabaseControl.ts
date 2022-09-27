import firebase from '../firebase_connection';

export const updateInterfaceDatabase = async (interfaceData: any) => {
  await firebase.firestore().collection('interface').doc('data')
    .set({ interfaceData });
};
