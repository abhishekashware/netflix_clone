import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCViS4-RzKW_xRBMEig_O_XQro3rAWOlc",
  authDomain: "react-netflix-clone-1662b.firebaseapp.com",
    projectId: "react-netflix-clone-1662b",
      storageBucket: "react-netflix-clone-1662b.appspot.com",
        messagingSenderId: "236034882601",
          appId: "1:236034882601:web:0af5df047fb08e51cd3038",
            measurementId: "G-B614BHT4TN"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;