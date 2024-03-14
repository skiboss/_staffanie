import React, { useState } from 'react';
import Logo from '../components/Logo';
import Input from '../components/Input';
import "./newpassword.css"

function NewPassword() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false)

  return (
    <div>
        <Logo />
        <div className='newpassword-container'>
            <h2>Password Reset</h2>
            <p>Please enter a matching secure password</p>
            <form className='newpassword-form'>
                <div className='password'>
                    <Input id="newpassword" type={!show ? "password" : "text"} placeholder="Password" />
                    <span className='showPassword' onClick={() => setShow(!show)}>{!show ? "Show" : "Hide"}</span>
                </div>
                <div className='password'>
                    <Input id="newpassword" type={!show2 ? "password" : "text"} placeholder="Password" />
                    <span className='showPassword' onClick={() => setShow2(!show2)}>{!show2 ? "Show" : "Hide"}</span>
                </div>
                <button type="submit" className='btn-save'>Save Password</button>
            </form>
        </div>
    </div>
  )
}

export default NewPassword