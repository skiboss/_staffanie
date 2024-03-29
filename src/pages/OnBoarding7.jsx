import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import Logo from '../components/Logo';
import _newregion from '../assets/new-region.png';
import "./onboarding.css"


Modal.setAppElement("#root");
function OnBoarding7() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="onboarding1-container">
        <div className="section-left"></div>
        <div className="section-right">
            <div className='flex flex-column'>
                <div className="onboarding-logo"><Logo /></div>
                <h3>
                    Branches
                </h3>
                <p className="">Add branches to your organization</p>
                
                <div className='add-region-bg'>
                    <img src={_newregion} style={{width: "100%"}} alt="Add a new region background" />
                    <span className='add-region-btn' onClick={() => setModalIsOpen(true)}>Add a new branch</span>
                </div>
                
                <Modal isOpen={modalIsOpen} 
                shouldCloseOnOverlayClick={false} 
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)'
                    },
                    content: {
                        color: 'black',
                        top: '20%',
                        left: '30%',
                        right: '25%',
                        bottom: '17%',
                        border: '1px solid #ccc',
                        padding: '30px',
                        background: '#fff',
                    }
                }}>
                    <div className='mod-heading'>
                    <h3 className=''>Add a branch</h3> 
                    </div>

                    <form className='mod'>
                        <div className='mt-3'>
                            <input type="text" name="branch-name" id="" placeholder='Branch Name' />
                        </div>

                        <div style={{display: 'flex', columnGap: '15px'}} className=''>
                            <select name="" id="">
                                <option>Operational Region</option>
                                <option></option>
                            </select>
                            <select name="" id="">
                                <option>Select Country</option>
                                <option></option>
                            </select>
                        </div>

                        <div style={{display: 'flex', columnGap: '15px'}} className=''>
                            <select name="" id="">
                                <option>Select State</option>
                                <option></option>
                            </select>
                            <select name="" id="">
                                <option>Select City</option>
                                <option></option>
                            </select>
                        </div>

                        <div className=''>
                            <input type="text" name="branch-code" id="" placeholder='Branch Code' />
                        </div>

                        <div className=''>
                            <Link to='/onboarding7'><button className='btn-proceed' onClick={() => setModalIsOpen(false)}>Proceed</button></Link>
                        </div>
                    </form>

                </Modal>

                <div className="onboarding1-button mt-5 options-buttons">
                    <Link to="/onboarding6"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding8"><button className='proceed' type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding7