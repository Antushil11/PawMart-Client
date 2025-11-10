import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { toast } from 'react-toastify';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

     const signOutUser = () =>{
        setLoading(true);
        toast.info("Logout successfully...");
        return signOut(auth);
    }
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

     const updateUserProfile = (displayName, photoURL) => {
            return updateProfile(auth.currentUser, {displayName, photoURL})
    }


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false);
            

        })

        return () =>{
            unsubscribe()
        }

    },[])


    const authInfo = {
        createUser,
        signInUser,
        user,
        loading,
        signOutUser,
        updateUserProfile,
        signInWithGoogle


    }


    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
            
    );
};

export default AuthProvider;