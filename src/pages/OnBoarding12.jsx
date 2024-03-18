import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo';
import "./onboarding.css"

function OnBoarding12() {
  return (
    <div class="onboarding1-container">
        <div class="section-left"></div>
        <div class="section-right">
            <div className='flex flex-column'>
                <div class="onboarding-logo"><Logo /></div>
                <h3>
                    Career & Roles
                </h3>
                <p class="">Add job roles to your organization</p>
                <div className='mb-1'>
                    <span className='plus-region-btn'>+ New Job Role</span>
                </div>
                <hr className='' />
                <div>
                    <div className='region-item role-item'>
                        <p>Head of marketing<span style={{display: "block"}}>Marketing</span></p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                    <div className='region-item role-item'>
                        <p>Head of finance<span style={{display: "block"}}>Finance</span></p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                    <div className='region-item role-item'>
                        <p>Accounts manager<span style={{display: "block"}}>Sales</span></p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                    <div className='region-item role-item'>
                        <p>Graphics design<span style={{display: "block"}}>Creative</span></p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                </div>
                <div class="onboarding1-button mt-5 options-buttons">
                    <Link to="/onboarding11"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding13"><button type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding12