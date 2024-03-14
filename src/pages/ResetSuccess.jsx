import React from 'react';
import Logo from '../components/Logo';
import _opportunity from '../assets/opportunity.png';

import "./resetsuccess.css"

function CheckMail() {
  return (
    <div>
        <Logo />
        <div className='resetsuccess-container'>
            <div>
                <img src={_opportunity} alt="picture of mail"/>
            </div>
            <h3>Success</h3>
            <p>
                Your password has been reset successfully.
            </p>
            <div>
                <button type="submit">Back to dashboard</button>
            </div>
        </div>
    </div>
  )
}

export default CheckMail