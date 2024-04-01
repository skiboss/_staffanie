import React from 'react'
import "./onboarding.css"
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'

function OnBoarding3() {
  return (
    <div className="onboarding1-container">
        <div className="section-left"></div>
        <div className="section-right">
            <div className='flex flex-column'>
                <div className="onboarding-logo"><Logo /></div>
                <h3>
                    Continents of Operation
                </h3>
                <p className='mb-5'>What continents are you operational?</p>
                <div className='flex flex-wrap gap-3'>
                <button className='border rounded-5 flex gap-2 use-options align-items-center'>
                <span className="">Asia</span>
                <i class="fa-regular fa-circle" style={{fontSize: '1.2rem'}}></i>
                </button>
                <button className='border rounded-5 flex gap-2 use-options align-items-center'>
                <span className="">Africa</span>
                <i class="fa-regular fa-circle" style={{fontSize: '1.2rem'}}></i>
                </button>
                <button className='border rounded-5 flex gap-2 use-options align-items-center'>
                <span className="">North America</span>
                <i class="fa-regular fa-circle" style={{fontSize: '1.2rem'}}></i>
                </button>
                <button className='border rounded-5 flex gap-2 use-options align-items-center'>
                <span className="">South America</span>
                <i class="fa-regular fa-circle" style={{fontSize: '1.2rem'}}></i>
                </button>
                <button className='border rounded-5 flex gap-2 use-options align-items-center'>
                <span className="">Europe</span>
                <i class="fa-regular fa-circle" style={{fontSize: '1.2rem'}}></i>
                </button>
                <button className='border rounded-5 flex gap-2 use-options align-items-center'>
                <span className="">Australia</span>
                <i class="fa-regular fa-circle" style={{fontSize: '1.2rem'}}></i>
                </button>
                <button className='border rounded-5 flex gap-2 use-options align-items-center'>
                <span className="">Antarctica</span>
                <i class="fa-regular fa-circle" style={{fontSize: '1.2rem'}}></i>
                </button>
                </div>
                <div class="onboarding1-button mt-5 pt-5 me-4 options-buttons">
                    <Link to="/onboarding2"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding4"><button className='proceed' type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding3