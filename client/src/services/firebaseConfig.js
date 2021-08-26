import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCnRl0OV-tuF8o8KxU6vc6RREP0VcLGaUE",
  authDomain: "caldasbaranoa-a3cf6.firebaseapp.com",
  databaseURL: "https://caldasbaranoa-a3cf6-default-rtdb.firebaseio.com",
  projectId: "caldasbaranoa-a3cf6",
  storageBucket: "caldasbaranoa-a3cf6.appspot.com",
  messagingSenderId: "299572398333",
  appId: "1:299572398333:web:db7ef5f13506911f655694",
  measurementId: "G-R3NH0D1Z8S",
};
firebase.initializeApp(firebaseConfig);
const firebaseStorage = firebase.storage();
export default firebaseStorage;
