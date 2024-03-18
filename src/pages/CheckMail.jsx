import React from 'react';
import Logo from '../components/Logo';
import _email from '../assets/email.png'

import "./checkmail.css"

function CheckMail() {
  return (
    <div className='text-center'>
        <Logo />
        <div className='checkmail-container'>
            <div>
                <img src={_email} alt="picture of mail"/>
            </div>
            <h3>Check email</h3>
            <p>Please check the email address associated with your
                St. Genevive account for further instructions on how
                to reset your password.
            </p>
            <div><p>Didn't receive an email? <span>Resend Email</span></p></div>
        </div>
    </div>
  )
}

export default CheckMail