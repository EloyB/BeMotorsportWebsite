import fb from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAcs3M7FKlfUHyQuRXCnp_HMJtCEVfvEbY",
  authDomain: "bemotorsport-9b713.firebaseapp.com",
  projectId: "bemotorsport-9b713",
  storageBucket: "bemotorsport-9b713.appspot.com",
  messagingSenderId: "632540508158",
  appId: "1:632540508158:web:2fe58b6f800df603bd1aaf",
  measurementId: "G-3NTC5PVQFP",
};

export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app();

export default firebase;
