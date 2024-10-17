// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyBc4LNllxBW6xiWh0n70Hyj0zdrMkgePMY",
//     authDomain: "gymlog-88c72.firebaseapp.com",
//     projectId: "gymlog-88c72.",
//     storageBucket: "gymlog-88c72.appspot.com",
//     messagingSenderId: "313002956763",
//     appId: "1:313002956763:web:b82a1eb3c620dce65871ae"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider, signInWithPopup };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc4LNllxBW6xiWh0n70Hyj0zdrMkgePMY",
  authDomain: "gymlog-88c72.firebaseapp.com",
  projectId: "gymlog-88c72",
  storageBucket: "gymlog-88c72.appspot.com",
  messagingSenderId: "313002956763",
  appId: "1:313002956763:web:6df4b44d4fcd678e83b9fe",
  measurementId: "G-HWK8SPJEWM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
