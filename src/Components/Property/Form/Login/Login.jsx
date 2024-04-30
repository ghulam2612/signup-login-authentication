import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {signInWithEmailAndPassword,signInWithPopup} from 'firebase/auth';
import { provider } from '../../firebase_config';
import './Login.css';
import img1 from '../../../../imgs/image8-2.webp'
import { auth } from '../../firebase_config';

const Login = () => {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");


    async function login() {
        try{
            const logingin= await signInWithEmailAndPassword(auth,email,password);
            console.log(logingin);
        }   catch(error){
            console.log(error.message);
        }
    }
    function loginWithGoogle() {
        signInWithPopup(auth,provider)
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        })
        
    }
  return (
    <div className="blur-container">
    <div className="login-container">
        <h2>Welcome back! Login to your account</h2>
        <input type="text" id="emailUsername" name="emailUsername" required placeholder='email' 
          onChange={(event)=>{
            setemail(event.target.value);
        }}
        />
        <input type="password" id="password" name="password" required placeholder='password' 
            onChange={(event)=>{
            setpassword(event.target.value);
        }}/>
        <Link to="/Forgotpass" className="forgot-password">Forgot Password?</Link>

        <div className="login-options">
            <button type="button" onClick={login}>Login</button>
            <button type="button" className="google-login" onClick={loginWithGoogle}>
                <img src={img1} alt="Google Icon"/> Login with Google
            </button>
        </div>

        <div className="create-account">
            Don't have an account? <Link to="/Signup">Create Your Account</Link>
        </div>
        </div>
        </div>

  )
}

export default Login
