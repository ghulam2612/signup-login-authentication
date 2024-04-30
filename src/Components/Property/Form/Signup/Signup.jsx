import React from 'react';
import {Link} from 'react-router-dom';
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import {auth} from "../../firebase_config";
import { useState } from 'react';
import './Signup.css';            



const Signup = () => {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [fname,setfname]=useState("");
    const [sname,setsname]=useState("");

    const [user,setUser]=useState({});
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    const register=async()=>{
        
        try{                                  
            const user=await createUserWithEmailAndPassword(auth,email,password);
            console.log(user);
        }   catch(error){
            if(error.message=="Firebase: Error (auth/email-already-in-use)."){
                alert("this email id is used");
            }
            console.log(error.message);
        }
    }                                      
    // function show(){
    //     let ch=document.getElementById('password');
    //     if(ch.type==='text'){
    //         ch.type='password'
    //     }
    //     else{
    //         ch.type='text';
    //     }
    // }


    const logout=async()=>{
        await signOut(auth);
        alert('logged out succesfully');
    }

  return (
    <div className="signup-container">
    <h2>Create Your Account</h2>
    <div className="form-group">
        <input type="email" id="email" name="email" required 
            onChange={(event)=>{
            setemail(event.target.value)
            }}/>
        <label htmlFor="email">Email:</label>
    </div>
    <div className="form-group">
        <input type="text" id="firstName" name="firstName" required
         onChange={(event)=>{
            setfname(event.target.value)
            }}
        />
        <label htmlFor="firstName">First Name:</label>
    </div>
    <div className="form-group">
        <input type="text" id="lastName" name="lastName" required
         onChange={(event)=>{
            setsname(event.target.value)
            }}
        />
        <label htmlFor="lastName">Last Name:</label>
    </div>
    <div className="form-group">
        <input type="password" id="password" name="password" required
         onChange={(event)=>{
            setpassword(event.target.value)
            }}
        />
        <label htmlFor="password">Password:</label>
    </div>
        <input type="checkbox" id="showPassword" />
        <p id="one">show password</p>

    <button type="button" onClick={register}>Create Your Account</button>

    <div className="terms">
        By registering, you agree to the <Link to="#">privacy policy</Link> and <Link to="#">terms of service</Link>.
    </div>

    <div className="login">
        Already have an account? <Link to="/Login">Login</Link>
    </div>
    <button onClick={logout}>logOUT</button>
</div>
  )
}
export default Signup;



