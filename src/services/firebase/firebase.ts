import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
//import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592

//// homeConfig-CRUD
export const firebaseConfig = {
    apiKey: "AIzaSyBKR9-ODLHBA2eyUqo7XUmTtBjbgkQVe7c",
    authDomain: "conecta-serv-8718b.firebaseapp.com",
    projectId: "conecta-serv-8718b",
    storageBucket: "conecta-serv-8718b.appspot.com",
    messagingSenderId: "1062463025965",
    appId: "1:1062463025965:web:5462a5beb0d680f77019a4",
    measurementId: "G-LS7C6S26VN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//export const storage = getStorage(app, `${firebaseConfig.storageBucket}`);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


