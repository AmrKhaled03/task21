import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBOkVSqPILK1ww3Z8FscCz9gY1A-31fUd8",
    authDomain: "auth-9ea5f.firebaseapp.com",
    projectId: "auth-9ea5f",
    storageBucket: "auth-9ea5f.appspot.com",
    messagingSenderId: "461657976888",
    appId: "1:461657976888:web:346225df23a7c5022176cd",
    measurementId: "G-0QNWMHQZPV"
};
firebase.initializeApp(firebaseConfig);

export default firebase;