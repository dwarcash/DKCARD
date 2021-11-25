import firebase from "firebase"

const config = {
    apiKey: "AIzaSyCs9cV9-n4F0QXgyky4px7XfgYjHEDAvAM",
    authDomain: "dk-card-52e5c.firebaseapp.com",
    projectId: "dk-card-52e5c",
    storageBucket: "dk-card-52e5c.appspot.com",
    messagingSenderId: "863636338378",
    appId: "1:863636338378:web:4b1f12d412b91ef4e06633",
    databaseURL: "gs://dk-card-52e5c.appspot.com"
};

firebase.initializeApp(config)

const storage = firebase.storage();

export { storage, firebase as default };