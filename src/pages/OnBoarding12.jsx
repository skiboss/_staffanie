import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import Logo from '../components/Logo';
import "./onboarding.css"

function OnBoarding12() {

    const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="onboarding1-container">
        <div className="section-left"></div>
        <div className="section-right">
            <div className='flex flex-column'>
                <div className="onboarding-logo"><Logo /></div>
                <h3>
                    Career & Roles
                </h3>
                <p className="">Add job roles to your organization</p>
                <div className='mb-1'>
                    <button className='plus-region-btn' onClick={() => setModalIsOpen(true)}>+ New Job Role</button>
                </div>
                <hr className='' />
                <div>
                    <div className='region-item role-item'>
                        <p>Head of marketing<span className='role' style={{display: "block"}}>Marketing</span></p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                    <div className='region-item role-item'>
                        <p>Head of finance<span className='role' style={{display: "block"}}>Finance</span></p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                    <div className='region-item role-item'>
                        <p>Accounts manager<span className='role' style={{display: "block"}}>Sales</span></p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                    <div className='region-item role-item'>
                        <p>Graphics design<span className='role' style={{display: "block"}}>Creative</span></p>
                        <span className='manage-btn'>Manage</span>
                    </div>
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
                        bottom: '27%',
                        border: '1px solid #ccc',
                        padding: '30px',
                        background: '#fff',
                    }
                }}>
                    <div className='mod-heading'>
                        <h3 className=''>Add Job Role</h3> 
                    </div>

                    <form className='mod'>
                        <div className='mt-3'>
                            <input type="text" name="job-title" id="" placeholder='Job Title' />
                        </div>

                        <div className=''>
                            <select name="" id="">
                                <option>Department</option>
                                <option></option>
                            </select>
                        </div>

                        <div className=''>
                            <select name="" id="">
                                <option>Permissions</option>
                                <option></option>
                            </select>
                        </div>

                        <div className=''>
                            <Link to='/onboarding12'><button className='btn-proceed' onClick={() => setModalIsOpen(false)}>Proceed</button></Link>
                        </div>
                    </form>

                </Modal>
                <div className="onboarding1-button mt-4 options-buttons">
                    <Link to="/onboarding11"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding13"><button className='proceed' type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding12