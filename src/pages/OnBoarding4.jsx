import React from 'react';
import "./onboarding.css";
import Logo from '../components/Logo';
import check from "../assets/check.svg"
import { Link } from 'react-router-dom';

function OnBoarding4() {
  return (
    <div className="onboarding1-container">
        <div className="section-left"></div>
        <div className="section-right">
            <div className='flex flex-column'>
                <div className="onboarding-logo"><Logo /></div>
                <h3>
                    Countries of Operation
                </h3>
                <p className='mb-5'>What countries are you operational?</p>
                <div className='continent-added-items'>
                    <span className='added-continents'>
                        <span>Europe</span> 
                        <span><img src={check} width="15px" /></span>
                    </span>
                    <span className='added-continents'>
                        <span>North America</span> 
                        <span><img src={check} width="15px" /></span>
                    </span>
                    <span className='added-continents'>
                        <span>Africa</span> 
                        <span><img src={check} width="15px" /></span>
                    </span>
                </div>
                <div className='mt-3'>
                    <select>
                        <option>Select a country</option>
                        <option>France</option>
                        <option>Netherlands</option>
                        <option>Canada</option>
                        <option>Ivory Coast</option>
                        <option>Senegal</option>
                        <option>Nigeria</option>
                        <option>Kenya</option>
                        <option>Tanzania</option>
                        <option>Ghana</option>
                        <option>South Africa</option>
                    </select>
                </div>
                <div className='countries-added-heading'>
                    <p>11 Countries added</p>
                </div>
                <div className='countries-added-items'>
                    <span className='added-countries'>1. France</span>
                    <span className='added-countries'>2. Netherlands</span>
                    <span className='added-countries'>3. Canada</span>
                    <span className='added-countries'>4. Ghana</span>
                    <span className='added-countries'>5. South Africa</span>
                    <span className='added-countries'>6. Kenya</span>
                    <span className='added-countries'>7. Nigeria</span>
                    <span className='added-countries'>8. Senegal</span>
                    <span className='added-countries'>9. Ivory Coast</span>
                    <span className='added-countries'>10. Mauritius</span>
                    <span className='added-countries'>11. Tanzania</span>
                </div>
                <div class="onboarding1-button mt-5 pt-5 me-4 options-buttons">
                    <Link to="/onboarding3"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding5"><button className='proceed' type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding4