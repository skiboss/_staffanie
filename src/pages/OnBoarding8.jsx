import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo';
import "./onboarding.css"

function OnBoarding8() {
  return (
    <div class="onboarding1-container">
        <div class="section-left"></div>
        <div class="section-right">
            <div className='flex flex-column'>
                <div class="onboarding-logo"><Logo /></div>
                <h3>
                    Operational Branches
                </h3>
                <p class="">Add branches to your organization</p>
                <div className='mb-1'>
                    <span className='plus-region-btn'>+ New branch</span>
                </div>
                <hr className='' />
                <div>
                    <div className='region-item'>
                        <p>Dublin European Operations Office</p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                    <div className='region-item'>
                        <p>Bangalore Software Development Center</p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                    <div className='region-item'>
                        <p>Nairobi Data Center</p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                </div>
                <div class="onboarding1-button mt-5 options-buttons">
                    <Link to="/onboarding7"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding9"><button type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding8