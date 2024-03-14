import React from 'react';
import _logo from '../assets/_logo.svg';

function Logo() {
  return (
    <div style={{textAlign: "center"}} className='logo'>
        <img src={_logo} alt="staffanie logo" />
    </div>
  )
}

export default Logo