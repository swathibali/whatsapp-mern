import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCHMAt2Xj3MQsZgAHubBu1yafW5IwJHjG4",
    authDomain: "whatsapp-mern-d98a5.firebaseapp.com",
    projectId: "whatsapp-mern-d98a5",
    storageBucket: "whatsapp-mern-d98a5.appspot.com",
    messagingSenderId: "531853931351",
    appId: "1:531853931351:web:51cf8495103758cf30c412"
  };

const db = firebaseConfig.firestore();
//const db2 = firebaseApp.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider};
export default db;