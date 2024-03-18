import React from 'react'
import "./onboarding.css"
import Logo from '../components/Logo'
import Input from '../components/Input'
import { Link } from 'react-router-dom'

function OnBoarding2() {
  return (
    <div class="onboarding1-container">
        <div class="section-left"></div>
        <div class="section-right">
            <div className='flex flex-column'>
                <div class="onboarding-logo"><Logo /></div>
                <h3>
                    What would you be using Staffanie for?
                </h3>
                <p className='mb-5'>Please check your preferred options below</p>
                <div className='flex flex-wrap gap-3'>
                <div className='border rounded-5 flex gap-2 use-options'>
                <span className="">Human Resource</span>
                <input className=''
                type="checkbox"
                />
                </div>
                <div className='border rounded-5 flex gap-2 use-options'>
                <span className="">Payroll Management</span>
                <input className=''
                type="checkbox"
                />
                </div>
                <div className='border rounded-5 flex gap-2 use-options'>
                <span className="">Time Tracking</span>
                <input className=''
                type="checkbox"
                />
                </div>
                <div className='border rounded-5 flex gap-2 use-options'>
                <span className="">Attendance Management</span>
                <input className=''
                type="checkbox"
                />
                </div>
                <div className='border rounded-5 flex gap-2 use-options'>
                <span className="">Procurement</span>
                <input className=''
                type="checkbox"
                />
                </div>
                <div className='border rounded-5 flex gap-2 use-options'>
                <span className="">Training</span>
                <input className=''
                type="checkbox"
                />
                </div>
                </div>
                <div class="onboarding1-button mt-5 pt-5 me-4 options-buttons">
                    <Link to="/onboarding1"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding3"><button type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding2