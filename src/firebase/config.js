import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAuuJq-dU4kbx1N2pF6Fh1KXV2b2YGtsxA",
  authDomain: "chat-app-ed39d.firebaseapp.com",
  projectId: "chat-app-ed39d",
  storageBucket: "chat-app-ed39d.appspot.com",
  messagingSenderId: "871335077299",
  appId: "1:871335077299:web:b010063bd026c3c6bd17c6",
  measurementId: "G-KGH21TKE8T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics()

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', '8080');
}

export {db, auth};
export default firebase;