import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD-kUmmhSaX4y7JM9OaqAgvv1wEYFrknVI',
  authDomain: 'altatech-home.firebaseapp.com',
  projectId: 'altatech-home',
  storageBucket: 'altatech-home.appspot.com',
  messagingSenderId: '313791755638',
  appId: '1:313791755638:web:71b59e04d164b6e2f6f657',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
