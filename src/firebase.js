import firebase from "firebase";

const firebaseConfig = {

    apiKey: "AIzaSyBUeyiaGDuVdNVlMmlC7seBbEVNKoE6yVM",
  
    authDomain: "twitter-clone-545ce.firebaseapp.com",
  
    projectId: "twitter-clone-545ce",
  
    storageBucket: "twitter-clone-545ce.appspot.com",
  
    messagingSenderId: "1091586027079",
  
    appId: "1:1091586027079:web:b962842794bfa1b438cb62"
  
  };
  
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = firebaseApp.database().ref();

export default storage;