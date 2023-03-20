import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCNl106J8SufMTbRn8yPNsmk5KtqpvSjpw",
  authDomain: "my-photos-5a11b.firebaseapp.com",
  projectId: "my-photos-5a11b",
  storageBucket: "my-photos-5a11b.appspot.com",
  messagingSenderId: "721601257444",
  appId: "1:721601257444:web:5a098ed50bdc098ade31f1",
  measurementId: "G-VB6D0F4K6F",
};

// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// export { auth };
export default firebase.initializeApp(firebaseConfig);
