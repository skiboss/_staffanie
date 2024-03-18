import React from 'react'
import "./onboarding.css"
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'

function OnBoarding3() {
  return (
    <div class="onboarding1-container">
        <div class="section-left"></div>
        <div class="section-right">
            <div className='flex flex-column'>
                <div class="onboarding-logo"><Logo /></div>
                <h3>
                    Continents of Operation
                </h3>
                <p className='mb-5'>What continents are you operational?</p>
                <div className='flex flex-wrap gap-3'>
                <div className='border rounded-5 flex gap-2 use-options'>
                <span className="">Asia</span>
                <input className=''
                type="checkbox"
                />
                </div>
                <div className='border rounded-5 flex gap-2 use-options'>
                <span className="">Africa</span>
                <input className=''
                type="checkbox"
                />
                </div>
                <div className='border rounded-5 flex gap-2 use-options'>
                <span className="">North America</span>
                <input className=''
                type="checkbox"
                />
                </div>
                <div className='border rounded-5 flex gap-2 use-options'>
                <span className="">South America</span>
                <input className=''
                type="checkbox"
                />
                </div>
                <div className='border rounded-5 flex gap-2 use-options'>
                <span className="">Europe</span>
                <input className=''
                type="checkbox"
                />
                </div>
                <div className='border rounded-5 flex gap-2 use-options'>
                <span className="">Australia</span>
                <input className=''
                type="checkbox"
                />
                </div>
                <div className='border rounded-5 flex gap-2 use-options'>
                <span className="">Antarctica</span>
                <input className=''
                type="checkbox"
                />
                </div>
                </div>
                <div class="onboarding1-button mt-5 pt-5 me-4 options-buttons">
                    <Link to="/onboarding2"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding4"><button type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding3