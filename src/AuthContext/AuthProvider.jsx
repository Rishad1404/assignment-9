import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext=createContext(null)

// Social Auth Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
console.log(user)
const [loading,setLoading]=useState(true)

// Create User
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    }

// Update User Profile
const updateUserProfile=(name,photo)=>{
    return updateProfile(auth.currentUser, {
        displayName:name, 
        photoURL: photo
      })
      
}
    // Sign In user
const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}


// Log out user
const logOut=()=>{
    setLoading(true)
    return signOut(auth);
}

// Google Login
const googleLogin=()=>{
    return signInWithPopup(auth,googleProvider)
}
// Github Login
const githubLogin=()=>{
    return signInWithPopup(auth,githubProvider)
}
useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false)
    });
    return()=>{
        unSubscribe();
    }
},[])

const authInfo={
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleLogin,
    githubLogin,
    updateUserProfile
    
}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;