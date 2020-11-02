import firebase from 'firebase'
import firestore from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDlAKiIvWiFRJPYj6ef_d31rHy64fUiiSg",
  authDomain: "courier-a609f.firebaseapp.com",
  databaseURL: "https://courier-a609f.firebaseio.com",
  projectId: "courier-a609f",
  storageBucket: "courier-a609f.appspot.com",
  messagingSenderId: "602169977058",
  appId: "1:602169977058:web:7d507a6cc76c7aba7896bb",
  measurementId: "G-QQPQG3ZKD5"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebaseApp.firestore()