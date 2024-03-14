import React from 'react'
import "./onboarding.css"
import Logo from '../components/Logo'
import Input from '../components/Input'
import { text } from 'body-parser'

function OnBoarding1() {
  return (
    <div class="onboarding1-container">
        <div class="section-left"></div>
        <div class="section-right">
            <div>
                <div class="onboarding-logo"><Logo /></div>
                <h3>
                    Hello Jane, let's setup your organisation
                </h3>
                <p>This process will take few minutes of your time</p>
                <div>
                    <label>Organization Name</label>
                    <Input type="text" placeholder="Ransome Kuti Company Limited"/>
                </div>
                <div>
                    <label>Organization Address</label>
                    <Input type="text" placeholder="No 12 Ransome Kuti Cresent, Surulere, Lagos"/>
                </div>
                <div>
                    <label>Organisation Type</label>
                    <select>
                        <option>For profit</option>
                        <option>Non profit</option>
                    </select>
                </div>
                <div>
                    <label>Number of Staff</label>
                    <select>
                        <option>10-50</option>
                        <option>50-100</option>
                    </select>
                </div>
                <div class="onboarding-button">
                    <button type="submit">Proceed</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding1
