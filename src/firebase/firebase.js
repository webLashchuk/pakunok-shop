import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAQIBDPBDzJ56MxDnSKiru7zrvKHKLdZfQ",
    authDomain: "pakunok-shop.firebaseapp.com",
    databaseURL: "https://pakunok-shop-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "pakunok-shop",
    storageBucket: "pakunok-shop.firebasestorage.app",
    messagingSenderId: "639326502460",
    appId: "1:639326502460:web:2e1cac3843ee3d43af0d39",
    measurementId: "G-5FWVQXL3SP"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, get };