import firebase from '../firebase_connection';

export const requestInterfaceData = async () => {
  try {
    const data = await firebase.firestore()
      .collection('interface').doc('data').get();
    return await data.data();
  } catch (error: any) {
    console.log(error.massage);
  }
};

// export const setInterfaceData = async (interfaceData:any) => {
//   firebase.firestore().collection('interface').doc('data').set({ interfaceData });
// };
