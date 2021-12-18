import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCTr1p2ncqxzhyqCTkAM6T-kRloXX8NHEQ",
    authDomain: "gradproj-bb312.firebaseapp.com",
    databaseURL: "https://gradproj-bb312-default-rtdb.firebaseio.com",
    projectId: "gradproj-bb312",
    storageBucket: "gradproj-bb312.appspot.com",
    messagingSenderId: "992562444182",
    appId: "1:992562444182:web:6576b481ca9c9b76044fb7"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();