import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo';
import "./onboarding.css"

function OnBoarding11() {
  return (
    <div class="onboarding1-container">
        <div class="section-left"></div>
        <div class="section-right">
            <div className='flex flex-column'>
                <div class="onboarding-logo"><Logo /></div>
                <h3>
                    Departments & Teams
                </h3>
                <p class="">Add departments to your organization</p>
                <div className='mb-1'>
                    <span className='plus-region-btn'>+ New Department</span>
                </div>
                <hr className='' />
                <div>
                    <div className='region-item'>
                        <p>Marketing</p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                    <div className='region-item'>
                        <p>Development & Technology</p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                    <div className='region-item'>
                        <p>Finance</p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                </div>
                <div class="onboarding1-button mt-5 options-buttons">
                    <Link to="/onboarding10"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding12"><button type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding11