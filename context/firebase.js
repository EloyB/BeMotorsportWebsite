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

// const firebaseConfig = {
//   apiKey: "AIzaSyAQa46l-hQd3jtHgI3QhYjNvNgoQX7JSMQ",
//   authDomain: "bemotorsport-test.firebaseapp.com",
//   projectId: "bemotorsport-test",
//   storageBucket: "bemotorsport-test.appspot.com",
//   messagingSenderId: "559580747783",
//   appId: "1:559580747783:web:1be3a9a7a5af44ad57f2a2",
// };

export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app();

export default firebase;
