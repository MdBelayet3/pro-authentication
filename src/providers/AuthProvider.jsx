import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

// create context
/* eslint-disable-next-line react-refresh/only-export-components */
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    // useState
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // function for creating user in firebase
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // function for signing user in firebase
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // function for sign out from firebase
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // function for sign in with google popup
    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // useEffect for observing to auth state change
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
            console.log('Observing from firebase',currentUser);
        })

        return () =>{
            unSubscribe();
        }
    },[])

    // value of context
    const authInfo = { loading, user, createUser, signInUser, googleLogIn, logOut, };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;