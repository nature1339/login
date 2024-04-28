// // Import the functions you need from the SDKs you need
// import { initializeApp, FirebaseApp, getApp } from "firebase/app";
// import "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// export let app: FirebaseApp;
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STARAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENTER_ID,
//   appId: process.env.REACT_APP_ID,
// };

// try {
//   app = getApp("app");
// } catch (e) {
//   app = initializeApp(firebaseConfig, "app");
// }

// // Initialize Firebase
// const firebase = initializeApp(firebaseConfig);

// export default firebase;

// Import the functions you need from the SDKs you need

import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import "firebase/auth";

export let app: FirebaseApp;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STARAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENTER_ID,
  appId: process.env.REACT_APP_ID,
};

try {
  app = getApp("app");
} catch (e) {
  app = initializeApp(firebaseConfig, "app");
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;
