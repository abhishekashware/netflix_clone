import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCViS4-RzKW_xRBMEig_O_XQro3rAWOlc",
  authDomain: "react-netflix-clone-1662b.firebaseapp.com",
  projectId: "react-netflix-clone-1662b",
  storageBucket: "react-netflix-clone-1662b.appspot.com",
  messagingSenderId: "236034882601",
  appId: "1:236034882601:web:22b516ace616d2dfcd3038",
  measurementId: "G-HVMGLCH6P9"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
