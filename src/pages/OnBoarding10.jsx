import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo';
import "./onboarding.css"

function OnBoarding10() {
  return (
    <div class="onboarding1-container">
        <div class="section-left"></div>
        <div class="section-right">
            <div className='flex flex-column'>
                <div class="onboarding-logo"><Logo /></div>
                <h3>
                    Headquarters
                </h3>
                <p class="">Create your organization's headquarters</p>
                <div className='mb-1'>
                    <span className='plus-region-btn'>+ New headquarters</span>
                </div>
                <hr className='' />
                <div>
                    <div className='region-item'>
                        <p>Pretoria Global Headquarters</p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                </div>
                <div class="onboarding1-button mt-5 options-buttons">
                    <Link to="/onboarding9"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding11"><button type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding10