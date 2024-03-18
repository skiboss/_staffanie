import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo';
import _newregion from '../assets/new-region.png';
import "./onboarding.css"

function OnBoarding7() {
  return (
    <div class="onboarding1-container">
        <div class="section-left"></div>
        <div class="section-right">
            <div className='flex flex-column'>
                <div class="onboarding-logo"><Logo /></div>
                <h3>
                    Branches
                </h3>
                <p class="">Add branches to your organization</p>
                
                <div className='add-region-bg'>
                    <img src={_newregion} style={{width: "100%"}} alt="Add a new region background" />
                    <span className='add-region-btn'>Add a new branch</span>
                </div>
                

                <div class="onboarding1-button mt-5 options-buttons">
                    <Link to="/onboarding6"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding8"><button type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding7