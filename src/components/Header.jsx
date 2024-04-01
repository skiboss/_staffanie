import React from 'react'
import _notification from "../assets/notification.svg"
import _headshot from "../assets/headshot1.png"

function Header() {
  return (
      <header className='header px-lg-5 px-2'>
        <div className='flex w-100'>
            <div className='left-header'>
                <button className='me-2 me-lg-5'><span className='me-2'>Add New</span> <span style={{fontSize: "16px"}}>+</span></button>
                <input className='dash-search' type='search' placeholder='Search' />
            </div>

            <div className='right-header'>
                <img src={_notification} style={{width: "2rem"}} alt="notification logo" />
                <img src={_headshot} style={{width: "15%", objectFit: "contain"}} className='' alt="dashboard profile picture"/>
            </div>
        </div>
        
    </header>
    
  )
}

export default Header