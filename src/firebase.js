import * as firebase from 'firebase';

const config = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: ""
};

export const firebaseApp = firebase.initializeApp(config);
export const db = firebase.database();

export const goalRef = firebase.database().ref('goals');
export const completedGoalRef = firebase.database().ref('completedGoals');