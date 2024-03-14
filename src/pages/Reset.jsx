import React from 'react';
import Input from '../components/Input';
import Logo from '../components/Logo';
import _logo from "../assets/_logo.svg";
import "./reset.css"

function ResetPassword() {
  return (
    <div>
        <Logo />
        <div className='reset-container'>
            <h2>Password Reset</h2>
            <p>Please enter your registered email</p>
            <form className='reset-form'>
                <Input type='email' name="email" placeholder='Email' />
                <div className="flex gap-15">
                    <button type='reset' className='btn-cancel'>Cancel</button>
                    <button type="submit" className='btn-proceed'>Proceed</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ResetPassword