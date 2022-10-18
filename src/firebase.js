// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBIz3TtugwSjPEId6GZx6gmTCZ2q8Hjjo4",
    authDomain: "bulk-email-tool.firebaseapp.com",
    projectId: "bulk-email-tool",
    storageBucket: "bulk-email-tool.appspot.com",
    messagingSenderId: "80303308683",
    appId: "1:80303308683:web:441d154a4e9c763532b98e",
    measurementId: "G-ZZKDD82F5N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()
  const auth = firebase.auth
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider}
  export default db