import React from 'react'
import { Link } from 'react-router-dom'
import "./onboarding.css"
import Logo from '../components/Logo'
import Input from '../components/Input'

function OnBoarding1() {
  return (
    <div className="onboarding1-container">
        <div className="section-left"></div>
        <div className="section-right">
            <div>
                <div className="onboarding-logo"><Logo /></div>
                <h3>
                    Hello Jane, let's setup your organisation
                </h3>
                <p className='mb-4'>This process will take few minutes of your time</p>
                <div className=''>
                    <label>Organization Name</label>
                    <Input type="text" placeholder="Ransome Kuti Company Limited"/>
                </div>
                <div className='mt-3'>
                    <label>Organization Address</label>
                    <Input type="text" placeholder="No 12 Ransome Kuti Cresent, Surulere, Lagos"/>
                </div>
                <div className='mt-3'>
                    <label>Organisation Type</label>
                    <select>
                        <option>For profit</option>
                        <option>Non profit</option>
                    </select>
                </div>
                <div className='mt-3'>
                    <label>Number of Staff</label>
                    <select>
                        <option>10-50</option>
                        <option>50-100</option>
                    </select>
                </div>
                <div className="onboarding-button mt-5 ">
                    <Link to="/onboarding2">
                    <button className='proceed' type="submit">Proceed</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding1
