import *as firebase from "firebase/app"
import "firebase/auth"


const app = firebase.initializeApp({
    apiKey: "AIzaSyDLuZ4opjKJfSNrRaoVcYerZxQYpBk6AWI",
    authDomain: "project-hope-c2db1.firebaseapp.com",
    databaseURL: "https://project-hope-c2db1.firebaseio.com",
    projectId: "project-hope-c2db1",
    storageBucket: "project-hope-c2db1.appspot.com",
    messagingSenderId: "468342701618",
    appId: "1:468342701618:web:3e79591928eb2597bd462b",
    measurementId: "G-VF25N5VR3S"
});

export default app;