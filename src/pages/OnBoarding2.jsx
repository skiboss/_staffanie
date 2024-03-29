import React from 'react'
import "./onboarding.css"
import Logo from '../components/Logo'
import Input from '../components/Input'
import { Link } from 'react-router-dom'

function OnBoarding2() {
  return (
    <div className="onboarding1-container">
        <div className="section-left"></div>
        <div className="section-right">
            <div className='flex flex-column'>
                <div className="onboarding-logo"><Logo /></div>
                <h3>
                    What would you be using Staffanie for?
                </h3>
                <p className='mb-5'>Please check your preferred options below</p>
                <div className='flex flex-wrap gap-3'>
                <button className='border rounded-5 flex gap-2 use-options align-items-center'>
                <span className="">Human Resource</span>
                <i class="fa-regular fa-circle" style={{fontSize: '1.2rem'}}></i>
                </button>
                <button className='border rounded-5 flex gap-2 use-options align-items-center'>
                <span className="">Payroll Management</span>
                <i class="fa-regular fa-circle" style={{fontSize: '1.2rem'}}></i>
                </button>
                <button className='border rounded-5 flex gap-2 use-options align-items-center'>
                <span className="">Time Tracking</span>
                <i class="fa-regular fa-circle" style={{fontSize: '1.2rem'}}></i>
                </button>
                <button className='border rounded-5 flex gap-2 use-options align-items-center'>
                <span className="">Attendance Management</span>
                <i class="fa-regular fa-circle" style={{fontSize: '1.2rem'}}></i>
                </button>
                <button className='border rounded-5 flex gap-2 use-options align-items-center'>
                <span className="">Procurement</span>
                <i class="fa-regular fa-circle" style={{fontSize: '1.2rem'}}></i>
                </button>
                <button className='border rounded-5 flex gap-2 use-options align-items-center'>
                <span className="">Training</span>
                <i class="fa-regular fa-circle" style={{fontSize: '1.2rem'}}></i>
                </button>
                </div>
                <div class="onboarding1-button mt-5 pt-5 me-4 options-buttons">
                    <Link to="/onboarding1"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding3"><button className='proceed' type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding2