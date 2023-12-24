import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // for redirecting

export const Login = () => {
  const navigate = useNavigate(); // the navigate fn use the UseNavigate hook

  // return a promise
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/")
  };

  return (
    <div>
      <p>Sign in with google</p>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  );
};
