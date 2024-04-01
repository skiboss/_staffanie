import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../pages/signin.css"
import _image1 from '../assets/image-1.png';
import Input from '../components/Input';
import Logo from '../components/Logo';

function SignIn() {
    const [access, setAccess] = useState("signin");
    const [show, setShow] = useState(false);


  return (
      <div className="container-fluid">
        <Logo />
        <div className="signin-container">
            <div className="form-section">
                <div className="signin-nav">
                    <p className={`${access === "signin" ? "active" : ""} mb-0`}><a onClick={() => setAccess("signin")}>Sign In</a></p>
                    <p className={`${access === "signup" ? "active" : ""} mb-0`}><a onClick={() => setAccess("signup")}> Sign Up</a></p>
                </div>
                <form>
                    {access === "signup" && (
                    <><Input id="name" type="text" placeholder="Name" />
                    <Input id="company" type="text" placeholder="Company" />
                    </>)}
                    <Input id="email" type="email" placeholder="Email" />
                    <div className='password'>
                        <Input id="password" type={!show ? "password" : "text"} placeholder="Password" />
                        <span className='showPassword' onClick={() => setShow(!show)}>{!show ? "Show" : "Hide"}</span>
                    </div>
                    {access === "signup" && <div className='checkbox'>
                        <Input type="checkbox" id="policy" /> 
                        
                        <label for="policy" className="policy">Agree to terms and conditions</label>
                    </div>}
                    <button type="submit" className={`btn-signin ${access === "signup" ? "mb-35" : ""}`}>{access === "signin" ? "Sign In" : "Sign Up"}</button>
                    {access === "signin" && <p style={{textAlign: "center"}} className='forgot'><Link style={{textDecoration: "none", color: "#000"}} to="/reset">Forgot your password?</Link></p> }
                </form>
            </div>
            <div className="image-section">
                <img src={_image1} alt="a dark lady on labcoat" />
            </div>
        </div>
    </div>
  )
}

export default SignIn