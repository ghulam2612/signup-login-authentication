import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { auth } from '../../firebase_config';
import {sendPasswordResetEmail} from 'firebase/auth'
import './forgotPass.css'
const Forgotpass = () => {
    const [email,setemail]=useState("");
     async function resetPassword() {
       await sendPasswordResetEmail(email,auth)
        .then(data=>{
            alert('see your gmail once');
        })
        .catch(err=>{
            alert(err.code);
        })
    }
  return (
    <div>
<div className="forgot-password-container">
    <h2>Forgot Password</h2>
    <p>Enter your username or email address, and we'll send you a password reset email.</p>
    <label htmlFor="emailUsername"></label>
    <input type="text" id="emailUsername" name="emailUsername" required placeholder='email'
      onChange={(event)=>
        setemail(event.target.value)
    }
    />
    <button type="button" onClick={resetPassword}>Reset Password</button>
    <div className="login-link">
        Remember your password? <Link to="/Login">Login</Link>
    </div>
</div>
    </div>
  )
}
export default Forgotpass
