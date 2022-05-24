import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: "AIzaSyAsEs8N2WSboO2GZCGjTowzpX951SUBuj4",
	authDomain: "vuechat-a6b51.firebaseapp.com",
	projectId: "vuechat-a6b51",
	storageBucket: "vuechat-a6b51.appspot.com",
	messagingSenderId: "520848640025",
	appId: "1:520848640025:web:31e890879cf8d9a3db0288"
}

const db = firebase.initializeApp(config);
export default db;