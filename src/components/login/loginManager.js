import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../../firebaseConfig";

export const initializeLogin = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider).then(res => {
        const { email, displayName } = res.user;
        const signnedInUser = {
            isSignnedIn: true,
            displayName: displayName,
            email: email,
            success: true
        }
        return signnedInUser;
    })
}
export const createNewUser = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            updateUser(name);
            console.log(res.user);
            const newUserInfo = res.user;
            newUserInfo.success = true;
            newUserInfo.isSignnedIn = true;
            newUserInfo.message = '';
            return newUserInfo;
        }).catch(function (error) {
            // Handle Errors here.
            const newUserInfo = {};
            newUserInfo.isSignnedIn = false;
            newUserInfo.message = error.message;
            newUserInfo.success = false;
            return newUserInfo;
            // ...
        });
}
export const signInWithEmailPass = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        const newUserInfo = res.user;
        newUserInfo.isSignnedIn = true;
        newUserInfo.success = true;
        newUserInfo.message = '';
        return newUserInfo;
    }).catch(function (error) {
        // Handle Errors here.
        const newUserInfo = {};
        newUserInfo.message = error.message;
        newUserInfo.success = false;
        return newUserInfo;
        // ...
    });
}
const updateUser = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    }).then(function () {
        // Update successful.
    }).catch(function (error) {
        // An error happened.
    });
}
export const resetPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email).then(function () {
        // Email sent.
    }).catch(function (error) {
        // An error happened.
    });
}