import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo';
import "./onboarding.css"

function OnBoarding6() {
  return (
    <div class="onboarding1-container">
        <div class="section-left"></div>
        <div class="section-right">
            <div className='flex flex-column'>
                <div class="onboarding-logo"><Logo /></div>
                <h3>
                    Operational Regions
                </h3>
                <p class="">Further breakdown your business operations into operational regions.</p>
                <div className='mb-1'>
                    <span className='plus-region-btn'>+ New region</span>
                </div>
                <hr className='' />
                <div>
                    <div className='region-item'>
                        <p>Sahel and East Africa Conservation Corridor (SEACC)</p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                    <div className='region-item'>
                        <p>Central and Southern Africa Renewable Energy Hub (CSAREH)</p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                    <div className='region-item'>
                        <p>West and North Africa Climate Adaptation Network (WNACAN)</p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                </div>
                <div class="onboarding1-button mt-5 options-buttons">
                    <Link to="/onboarding5"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding7"><button type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding6