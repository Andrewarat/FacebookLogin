import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";

import { auth } from './firebase';
import firebase from "firebase/app";

const Login = () => {
    return(
        <div id="login-page">
            <div className="login-card">
                <h2>Welcome to UniChat!!</h2>
                <div
                    className="login-button google" 
                    onClick={() => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}>
                        <GoogleOutlined />
                        <span>Sign in with Google</span>
                </div>
                <br/><br/>
                <div className="login-button facebook" 
                onClick={() => auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())}>
                    <FacebookOutlined />
                    <span>Sign in with Facebook</span>
                </div>
            </div>
        </div>
    )
}
export default Login